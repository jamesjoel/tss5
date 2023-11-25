let routes = require("express").Router();

routes.use("/api", require("../controllers/APIController"))
routes.use("/api/indiacity", require("../controllers/IndiaCityAPIController"))
routes.use("/api/authentication", require("../controllers/AuthenticationAPIController"))
routes.use("/api/user/authentication", require("../controllers/UserAuthenticationAPIController"))

module.exports = routes;