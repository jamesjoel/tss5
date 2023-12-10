let routes = require("express").Router();

routes.post("/", async (req, res) => {
    console.log(req.body);
})

module.exports = routes;