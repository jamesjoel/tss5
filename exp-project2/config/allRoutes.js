const routes = require("express").Router();

const HomeController = require("../controllers/HomeController");
const AboutController = require("../controllers/AboutController");
const TeacherController = require("../controllers/TeacherController")

routes.use("/", HomeController);
routes.use("/about", AboutController);
routes.use("/teacher", TeacherController);


module.exports = routes;