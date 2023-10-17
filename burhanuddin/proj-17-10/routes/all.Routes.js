const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/info", require("../controllers/InfoController"));

module.exports = routes ;   