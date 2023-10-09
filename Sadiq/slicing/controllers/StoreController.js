const Route = require("express").Router();
let employemodel = require("../models/employee");

Route.post("/", async (req, res)=>{
    await employemodel.create(req.body);
    res.redirect("/about")
})

module.exports = Route;