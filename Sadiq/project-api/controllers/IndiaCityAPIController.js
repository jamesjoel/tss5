let route = require("express").Router();
let cities = require("../model/indiaCity")


route.get("/state", async (req, res)=>{
    let indiaState = await cities.distinct("state");
    res.send(indiaState);
})

route.get("/:state", async(req, res)=>{
    let State = req.params.state;
    let data = await cities.find({ state : State })
    res.send(data)
})

module.exports = route;