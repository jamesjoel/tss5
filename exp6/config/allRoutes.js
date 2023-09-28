const routes = require("express").Router();

const HomeController = require("../controllers/HomeController");
const AboutController = require("../controllers/AboutController");
const ContactController = require("../controllers/ContactController");

routes.use("/", HomeController);
routes.use("/about", AboutController);
routes.use("/contact", ContactController);

module.exports = routes;