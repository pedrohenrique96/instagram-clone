const express = require("express");
const cors = require("cors");
const router = require("./config/routes");
const path = require("path");
require("./database/database");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(router);

app.listen(5000);
