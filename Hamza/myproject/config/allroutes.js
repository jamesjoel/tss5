
const routes = require("express").Router();

const HomeController = require("../controllers/HomeController");
const AboutController = require("../controllers/AboutController");
const StudentContoller = require("../controllers/StudentController")

routes.use("/", HomeController);
routes.use("/about", AboutController);
routes.use("/student", StudentContoller);


module.exports = routes;