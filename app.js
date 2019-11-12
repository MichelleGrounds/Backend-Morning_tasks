const express = require("express");
const app = express();
const { controllerRouter } = require("./routers/controller-router");

app.use(express.json());

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use("/contact", controllerRouter);

module.exports = { app };
