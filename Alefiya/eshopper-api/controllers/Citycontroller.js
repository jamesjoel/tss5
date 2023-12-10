const routes = require("express").Router();
const city = require("../models/city");

routes.get("/", async (req, res) => {
    let result = await city.find().distinct("state");
    // console.log(result)
    res.send(result);
})

routes.get("/:state", async(req, res)=>{
    let State = req.params.state;
    let data = await city.find({ state : State })
    res.send(data)
})

module.exports = routes;