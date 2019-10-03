const express = require("express");
const router = require("./config/routes");
require("./database/database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(5000);
