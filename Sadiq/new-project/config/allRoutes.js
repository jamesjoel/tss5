const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"))
routes.use("/about", require("../controllers/AboutController"))
routes.use("/teacher", require("../controllers/TeacherController"))

module.exports = routes;