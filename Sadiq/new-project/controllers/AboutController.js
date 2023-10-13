const route = require("express").Router();
const data = require("../model/data");

route.get("/", async (req, res)=>{
    // let value = req.params.value;
    let limit = 10;
    // limit += value;
    let dataModel = await data.find({}).skip(0).limit(limit);
    let pagedata = { data : dataModel }
    res.render("pages/about", pagedata);
})

route.get("/page/:number", async (req, res)=>{
    let PgNumber = req.params.number;
    PgNumber = parseInt(PgNumber, 10);
    let limit = 10;
    limit = limit + PgNumber;
    let dataModel = await data.find({}).skip(0).limit(limit);
    let pagedata = { data : dataModel }
    res.render("pages/about", pagedata);
})

module.exports = route;