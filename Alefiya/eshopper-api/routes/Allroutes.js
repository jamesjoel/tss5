const routes = require("express").Router();

routes.use("/api/patients", require("../controllers/Patientscontroller"));
routes.use("/api/user", require("../controllers/usercontroller"));
routes.use("/api/city", require("../controllers/Citycontroller"));
routes.use("/api/auth", require("../controllers/Authcontroller"));

module.exports = routes;