const Route = require("express").Router();
let employemodel = require("../models/employee");

Route.get("/", async (req, res)=>{
    const employe = await employemodel.find({});
    const pagedata = {data1 : employe}
    res.render("pages/our_team", pagedata)
})

module.exports = Route;