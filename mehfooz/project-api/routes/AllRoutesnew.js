const routes = require("express").Router();
// routes.use("/api/teacher",require("../tssproject/src/Modules/controllers/TeacherController"));

routes.use("/api/city",require("../../project-api/controllers/CityControllers"));



module.exports=routes;
