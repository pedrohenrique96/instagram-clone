const routes = require("express").Router();
const multer = require("multer");
const uploadConfig = require("./upload");

const userController = require("../app/controllers/UserController");
const PublicationController = require("../app/controllers/PublicationController");
const authController = require("../app/controllers/AuthController");
const ProfileController = require("../app/controllers/ProfileController");

const FollowingController = require("../app/controllers/FollowingController");
const authMiddlewares = require("../app/middlewares/auth");
const upload = multer(uploadConfig);

//Users
routes.get("/user", authMiddlewares, userController.index);
routes.get("/userId", authMiddlewares, userController.show);
routes.post("/user", userController.store);
routes.put("/updateuser", authMiddlewares, userController.update);
routes.post("/following", authMiddlewares, FollowingController.store);

//Authenticate
routes.post("/auth", authController.authenticate);

//Publication
routes.get("/publication", authMiddlewares, PublicationController.index);
routes.post(
    "/publication",
    authMiddlewares,
    upload.single("photo"),
    PublicationController.store
);

//profile
routes.get("/profile", authMiddlewares, ProfileController.show);

module.exports = routes;
