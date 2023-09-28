const Route = require("express").Router();

// const HomeController = require("../controllers/HomeController");
// const AboutController = Route.use("../controllers/AboutController");
// const AddingController = Route.use("../controllers/AddingController");
// const DataController = Route.use("../controllers/DataController");
// const SaveController = Route.use("../controllers/SaveController");
// const StoreController = Route.use("../controllers/StoreController");
// const TeamsController = Route.use("../controllers/TeamsController");

Route.use("/", require("../controllers/HomeController"));
Route.use("/About", require("../controllers/AboutController"));
Route.use("/Adding", require("../controllers/AddingController"));
Route.use("/Data", require("../controllers/DataController"));
Route.use("/Teams", require("../controllers/TeamsController"));

//Route.use("/Save", require("../controllers/SaveController"));
//Route.use("/Store", require("../controllers/StoreController"));


module.exports = Route;