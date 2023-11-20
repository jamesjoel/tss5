let routes = require ('express').Router();
let citymodel = require ("../models/CityModel")

routes.get("/state",async(req,res)=>{ 
    let states = await citymodel.distinct("state")
    res.send(states)

})

routes.get("/:state",async(req,res)=>{
    let state = req.params.state

    let city = await citymodel.find({state : state})

    res.send(city)
})





module.exports = routes ;