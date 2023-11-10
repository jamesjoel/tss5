let routes = require("express").Router();

routes.use("/api", require("../controllers/APIController"))
routes.use("/api/indiacity", require("../controllers/IndiaCityAPIController"))
routes.use("/api/authentication", require("../controllers/AuthenticationAPIController"))

module.exports = routes;