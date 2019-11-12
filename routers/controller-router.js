const controllerRouter = require("express").Router();
const { contact } = require("../controllers/contact-controller");

controllerRouter.route("/").post(contact);

module.exports = { controllerRouter };
