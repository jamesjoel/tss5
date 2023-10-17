let routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/patients", require("../controllers/PatientController"));

module.exports = routes;