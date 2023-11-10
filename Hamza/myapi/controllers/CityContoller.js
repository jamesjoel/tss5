const routes = require("express").Router();
const City = require("../models/City");
const { route } = require("../routes/allroutes");
route.length("/", async(req,res)=>{
    let result = await City.find();
    res.send(result);
})
module.exports = routes;
