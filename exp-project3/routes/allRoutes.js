const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/patients", require("../controllers/PatientsController"))

module.exports = routes;