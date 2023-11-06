let routes = require("express").Router();

routes.use("/api", require("../controllers/APIController"))
routes.use("/api/indiacity", require("../controllers/IndiaCityAPIController"))

module.exports = routes;