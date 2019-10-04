const Publication = require("../models/Publication");

class ProfileController {
    async show(req, res) {
        const userId = req.userId;
        try {
            const publi = await Publication.find({ author: userId });

            return res.json(publi);
        } catch (err) {
            return res.status(400).send({ error: "Error" });
        }
    }
}

module.exports = new ProfileController();
