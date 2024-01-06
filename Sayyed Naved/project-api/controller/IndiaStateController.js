let routes = require ('express').Router();
let citymodel = require ("../models/CityModel")

routes.get("/state",async(req, res)=>{ 
    let states = await citymodel.distinct("state")
    // console.log(states)
    res.send(states)

})

routes.get("/:state",async(req,res)=>{
    let State = req.params.state
// console.log(State)

    let City = await citymodel.find({state : State})

    res.send(City)
})





module.exports = routes ;