const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
// localhost:3000

routes.use("/about", require("../controllers/AboutController"));
routes.use("/contact", require("../controllers/ContactController"));


// routes.use("/help", require("../controllers/HelpController"));

module.exports = routes;