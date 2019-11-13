const express = require("express");
const app = express();
const { controllerRouter } = require("./routers/controller-router");

app.set("view engine", "ejs");

app.use(express.json());

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use("/contact", controllerRouter);

app.use("/*", (req, res, next) => {
  next({ status: 404, msg: "Page Not Found" });
});

app.use((err, req, res, next) => {
  const { msg = "Internal Server Error", status = 500 } = err;
  res.status(status).render("error", { status, msg });
});

module.exports = { app };
