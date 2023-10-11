const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/menu", require("../controllers/MenuController"));



module.exports = routes;