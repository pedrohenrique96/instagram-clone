const User = require("../models/User");

class FollowingController {
    async store(req, res) {
        try {
            const userId = req.userId;
            const { user } = req.headers;

            const loggedUser = await User.findById(userId);
            const targetUser = await User.findById(user);

            if (!targetUser)
                return res.status(400).json({ error: " User not exists " });

            loggedUser.following.push(targetUser);
            targetUser.followers.push(loggedUser);

            await targetUser.save();
            await loggedUser.save();

            return res.json(loggedUser);
        } catch (err) {
            console.log(err);
            return res.status(400).send(err);
        }
    }
}

module.exports = new FollowingController();
