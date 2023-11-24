let routes = require ('express').Router();





routes.use("/api",require("../controller/IndiaStateController"));
module.exports = routes ;