const routes = require("express").Router();

// routes.use("/api/product", require("../controllers/ProductController"))
routes.use("/api/city", require("../controllers/CityController"))
routes.use("/api/user", require("../controllers/UserController"))
routes.use("/api/login", require("../controllers/AuthController"))
routes.use("/api/adminlogin", require("../controllers/AdminAuthController"))
routes.use("/api/category", require("../controllers/CategoryController"))
routes.use("/api/subcategory", require("../controllers/SubCategoryController"))
routes.use("/api/product", require("../controllers/ProductConroller"))

module.exports = routes;