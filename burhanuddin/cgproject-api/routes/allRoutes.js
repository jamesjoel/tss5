const routes = require("express").Router();

routes.use("/api/product", require("../controllers/ProductController"))
routes.use("/api/city", require("../controllers/CityController"))

module.exports = routes;