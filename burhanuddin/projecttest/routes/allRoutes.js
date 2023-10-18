const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/student", require("../controllers/StudentController"));

module.exports = routes ; 