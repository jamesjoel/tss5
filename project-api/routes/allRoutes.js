const routes = require("express").Router();

// localhost:8080/api/teacher
routes.use("/api/teacher", require("../controllers/TeacherController"));
routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/user", require("../controllers/UserController"));

module.exports = routes;