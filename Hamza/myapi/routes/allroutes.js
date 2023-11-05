const routes =require("express").Router();

routes.use("/api/city",require("../controllers/CityContoller"));

module.exports = routes;

