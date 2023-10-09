const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"))
routes.use("/about", require("../controllers/AboutController"))
routes.use("/teacher", require("../controllers/TeacherController"))
routes.use("/account", require("../controllers/AccountController.js"))
routes.use("/games", require("../controllers/GamesController.js"))

module.exports = routes;