let routes = require("express").Router();

routes.use("/api", require("../controllers/APIController"))

module.exports = routes;