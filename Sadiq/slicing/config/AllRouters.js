const Route = require("express").Router();

// const HomeController = require("../controllers/HomeController");
// const AboutController = Route.use("../controllers/AboutController");
// const AddingController = Route.use("../controllers/AddingController");
// const DataController = Route.use("../controllers/DataController");
// const SaveController = Route.use("../controllers/SaveController");
// const StoreController = Route.use("../controllers/StoreController");
// const TeamsController = Route.use("../controllers/TeamsController");

Route.use("/", require("../controllers/HomeController"));
Route.use("/about", require("../controllers/AboutController"));
Route.use("/adding", require("../controllers/AddingController"));
Route.use("/data", require("../controllers/DataController"));
Route.use("/teams", require("../controllers/TeamsController"));

Route.use("/save", require("../controllers/SaveController"));
Route.use("/store", require("../controllers/StoreController"));


module.exports = Route;