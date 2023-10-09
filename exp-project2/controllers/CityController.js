const routes = require("express").Router();
const City = require("../models/City");

routes.get("/", async (req, res)=>{
    let result = await City.find();
    let pagedata = { data : result };
    res.render("pages/cities", pagedata);
})

module.exports = routes;