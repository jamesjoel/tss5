let routes = require ('express').Router();
let citymodel = require ("../models/CityModel")

routes.get("/state",async(req, res)=>{ 
    let states = await citymodel.distinct("state")
    res.send(states)

})

routes.get("/city/:state",async(req,res)=>{
    let State = req.params.state
console.log(State)

    let city = await citymodel.find({state : State})

    res.send(city)
})





module.exports = routes ;