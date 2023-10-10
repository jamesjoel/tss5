const route = require("express").Router();
const data = require("../model/data");

route.get("/", async (req, res)=>{
    let dataModel = await data.find({});
    let pagedata = { data : dataModel }
    res.render("pages/about", pagedata);
})

module.exports = route;