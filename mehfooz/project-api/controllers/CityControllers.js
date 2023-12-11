const routes = require("express").Router();
let City = require("../Models/City")


// 8080/api/city
routes.get("/",async(req,res)=>{
    
    let result = await City.find();
    // console.log(result)
    res.send(result)
})

routes.get("/state",async(req,res)=>{
    
    let result = await City.distinct("state");
    // console.log(result)
    res.send(result)
})



routes.get("/getcity/:a",async(req,res)=>{
    let x = req.params.a;
    // console.log(x)

    let result = await City.find({state : x});
    console.log(result);
    res.send(result);
}); 


module.exports = routes;