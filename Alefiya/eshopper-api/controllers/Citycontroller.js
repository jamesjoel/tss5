const routes = requiure("express").Router();
const city = require("../models/city");

routes.get("/", async (req, res) => {
    let result = await city.find();
    res.send(result);
})
module.exports = routes;