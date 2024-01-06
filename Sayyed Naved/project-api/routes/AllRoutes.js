let routes = require ('express').Router();




routes.use("/api/city",require("../controller/IndiaStateController"));
routes.use("/api/demo",require("../controller/DemoController"));
routes.use("/api/user",require("../controller/UserController"));
module.exports = routes ;