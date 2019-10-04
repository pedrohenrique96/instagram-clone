const User = require("../controllers/UserController");

class FollowingController {
    async store(req, res) {
        try {
            const { userId } = req.userId;
            const { user } = req.headers;

            const loggedUser = await User.findById(user);
            const targetUser = await User.findById(userId);

            if (!targetUser)
                return res.status(400).json({ error: " User not exists " });

            loggedUser.following.push(targetUser._id);

            await loggedUser.save();

            return res.json(loggedUser);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new FollowingController();
