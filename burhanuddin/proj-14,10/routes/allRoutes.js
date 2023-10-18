const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/employee", require("../controllers/EmployeeController"));

module.exports = routes;
