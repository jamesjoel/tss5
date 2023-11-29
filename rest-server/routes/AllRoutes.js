const routes = require("express").Router();

routes.use("/api/employee", require("../controllers/EmpController"));

module.exports = routes;