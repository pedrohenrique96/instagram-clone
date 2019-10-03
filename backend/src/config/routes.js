const routes = require("express").Router();

const userController = require("../app/controllers/UserController");
const PublicationController = require("../app/controllers/PublicationController");
const authController = require("../app/controllers/AuthController");

const FollowingController = require("../app/controllers/FollowingController");

routes.get("/user", userController.index);
routes.post("/user", userController.store);
routes.post("/auth", authController.authenticate);

routes.post("/user/:userId/following", FollowingController.store);


routes.post('/publication', PublicationController.store)
routes.get('/publication', PublicationController.index)

module.exports = routes;
