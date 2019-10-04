const Publication = require("../models/Publication");

class PublicationController {
    async index(req, res) {
        const publi = await Publication.find().populate("author");

        return res.json(publi);
    }
    async store(req, res) {
        try {
            const { filename } = req.file;
            const { photo, description } = req.body;

            const publi = await Publication.create({
                photo: filename,
                description,
                author: req.userId
            });

            await publi.populate("author").execPopulate();

            return res.json(publi);
        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: "Erro" });
        }
    }
}

module.exports = new PublicationController();
