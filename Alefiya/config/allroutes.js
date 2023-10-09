const routes = require("express").Router();

const HomeController = require("../controllers/HomeController");
const AboutController = require("../controllers/AboutController");
const ContactController = require("../controllers/ContactController");
const CalsController = require("../controllers/CalsController");
const PatternsController = require("../controllers/PatternsController");

routes.use("/", HomeController);
routes.use("/about", AboutController);
routes.use("/contact", ContactController);
routes.use("/cals", CalsController);
routes.use("/Patterns", PatternsController);

module.exports = routes;