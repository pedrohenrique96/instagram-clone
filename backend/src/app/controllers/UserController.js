const User = require("../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");

class UserController {

    async index(req, res) {
        const user = await User.find()

        user.password = undefined;

        return res.json(user)
    }
    async store(req, res) {
        try {
            const { username, name, email, password } = req.body;

            if (
                (await User.findOne({ username })) ||
                (await User.findOne({ email }))
            ) {
                return res
                    .status(400)
                    .send({ error: "Username or E-mail already exists" });
            }

            if (!name || !password)
                res.status(400).send({
                    error: "Fill in the fields"
                });

            const user = await User.create(req.body);

            const token = jwt.sign({ id: user._id }, process.env.AUTH, {
                expiresIn: 86400
            })

            user.password = undefined;

            return res.status(200).json({user, token});
        } catch (err) {
            res.status(400).send({ error: "Registration fail" });
        }
    }
}

module.exports = new UserController();
