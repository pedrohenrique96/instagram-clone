const User = require("../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const img =
    "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMagestic&facialHairColor=Brown&clotheType=BlazerSweater&clotheColor=PastelYellow&eyeType=Cry&eyebrowType=RaisedExcited&mouthType=Concerned&skinColor=Pale";

class UserController {
    async index(req, res) {
        const userId = req.userId;

        const loggedUser = await User.findById(userId);

        const user = await User.find({
            $and: [
                { _id: { $ne: userId } },
                { _id: { $nin: loggedUser.following } }
            ]
        }).populate("followers").populate("following");

        return res.json(user);
    }

    async show(req, res) {
        const user = await User.findById(req.userId);

        user.password = undefined;

        return res.json(user);
    }

    async store(req, res) {
        try {
            const { username, name, email, password, bio, avatar } = req.body;

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

            const user = await User.create({
                username,
                name,
                email,
                password,
                bio,
                avatar: img
            });

            const token = jwt.sign({ id: user._id }, process.env.AUTH, {
                expiresIn: 86400
            });

            user.password = undefined;

            return res.status(200).json({ user, token });
        } catch (err) {
            res.status(400).send({ error: "Registration fail" });
        }
    }

    async update(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.userId, req.body, {
                runValidators: true
            });

            user.password = undefined;

            return res.json(user);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new UserController();
