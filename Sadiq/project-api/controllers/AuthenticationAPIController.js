let route = require("express").Router();
let signup = require("../model/signup")
let sha = require("sha1")

route.post("/signup", async(req, res)=>{
    req.body.password = sha(req.body.password);
    await signup.create(req.body)
    res.send({success : true})
})

route.get("/accounts" , async(req, res)=>{
    let accounts = await signup.find({})
    res.send(accounts)
})

module.exports = route