const routes = require("express").Router();

const HomeController = require("../controllers/HomeController");
const AboutController = require("../controllers/AboutController");
const TeacherController = require("../controllers/TeacherController")
const CityController = require("../controllers/CityController")

routes.use("/", HomeController);
routes.use("/about", AboutController);
routes.use("/teacher", TeacherController);
routes.use("/cities", CityController);


module.exports = routes;