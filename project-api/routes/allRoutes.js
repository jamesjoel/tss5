const routes = require("express").Router();

// localhost:8080/api/teacher
routes.use("/api/teacher", require("../controllers/TeacherController"));

module.exports = routes;