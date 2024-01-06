const routes = require ("express").Router();

routes.use("/api/student", require("../controllers/StudentController"));
routes.use("/api/city",require("../controllers/CityController"));
routes.use("/api/User",require("../controllers/UserController"));
module.exports = routes;