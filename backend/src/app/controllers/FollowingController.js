const User = require("../models/User");

class FollowingController {
    async store(req, res) {
        try {
            const   userId  = req.userId
            const { user } = req.headers

            const loggedDev = await User.findById(user)
            const targetDev = await User.findById(userId)

            if(!targetDev) return res.status(400).json({error: ' Dev not exists '})

            if(targetDev.following.includes(loggedDev._id)) return console.log('Estou seguindo')

            loggedDev.following.push(targetDev._id)

            await loggedDev.save()

        return res.json(loggedDev)
        } catch (err) {
            console.log(err);
            return res.status(400).send(err)
        }
    }
}

module.exports = new FollowingController();
