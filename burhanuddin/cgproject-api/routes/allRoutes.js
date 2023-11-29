const routes = require("express").Router();

routes.use("/api/product", require("../controllers/ProductController"))
routes.use("/api/city", require("../controllers/CityController"))
routes.use("/api/user", require("../controllers/UserController"))
routes.use("/api/login", require("../controllers/AuthController"))

module.exports = routes;