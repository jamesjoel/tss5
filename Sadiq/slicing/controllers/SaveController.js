const Route = require("express").Router();
let ordermodel = require("../models/order");

Route.post("/", async (req, res)=>{
    await ordermodel.create(req.body);
    res.redirect("/adding")
})

module.exports = Route;