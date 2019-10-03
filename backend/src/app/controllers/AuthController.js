const User = require("../models/User");
require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class authController {
    async authenticate(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user) res.status(400).send({ error: "User not found" });
        if (!(await bcrypt.compare(password, user.password)))
            res.status(400).send({ error: "Invalid password" });

        user.password = undefined;

        const token = jwt.sign({ id: user._id }, process.env.AUTH, {
            expiresIn: 86400
        });

        res.send({ user, token });
    }
}

module.exports = new authController();
