const routes = require("express").Router()
const User = require("../Models/User")
const jwt = require("jsonwebtoken")

routes.get("/",async(req,res)=>{
    // console.log(req.headers.authorization)
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "xyz")
    // console.log(obj)
    let result = await User.find({_id : obj.id})
    // console.log(result)
    delete result[0].password
    res.send(result[0])
})

routes.get("/info/:a",async(req,res)=>{
    let result=await User.find({_id:req.params.a})
    // console.log(result)
    res.send({result:result[0]})
})

routes.put("/update", async(req, res)=>{
    // console.log(req.headers.authorization)
    let token = req.headers.authorization
    let obj = jwt.decode(token, "xyz")
    let result = await User.updateMany({_id : obj.id}, req.body)
    // console.log(result)
    res.send(result)
})

module.exports = routes