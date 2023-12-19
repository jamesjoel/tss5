let routes = require ('express').Router();




routes.use("/api",require("../controller/IndiaStateController"));
routes.use("/api",require("../controller/DemoController"));
module.exports = routes ;