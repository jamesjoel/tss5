const routes = require("express").Router()
const User = require("../Models/User")
const sha1 = require("sha1")

// 8080/api/user

routes.post("/signup",async(req,res)=>{
    delete req.body.repassword
    req.body.password = sha1(req.body.password)
    let result = await User.create(req.body)
    res.send({success : true, result})
})

routes.get("/info",async(req,res)=>{
    if(req.headers.authorization){
        let result = await User.find()
    res.send({success : true, result : result})
    }else{
        res.send({success : false})
    }
    
})

module.exports = routes