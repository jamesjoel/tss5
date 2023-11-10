let route = require("express").Router();
let signup = require("../model/signup")

route.post("/signup", async(req, res)=>{
    await signup.create(req.body)
    res.send({success : true})
})

route.get("/accounts" , async(req, res)=>{
    let accounts = await signup.find({})
    res.send(accounts)
})

module.exports = route