const Route = require("express").Router();

Route.get("/teams", async (req, res)=>{
    const employe = await employemodel.find();
    const pagedata = {data1 : employe}
    res.render("pages/our_team", pagedata)
})

module.exports = Route;