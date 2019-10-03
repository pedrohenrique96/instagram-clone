const Publication = require("../models/Publication");

class PublicationController {
    async index(req, res) {
        const publi = await Publication.find().populate('author')

        return res.json(publi)
    }
    async store(req, res) {
        const publi = await Publication.create(req.body);

        return res.json(publi);
    }
}

module.exports = new PublicationController();
