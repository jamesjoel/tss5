let route = require("express").Router()
let signup = require("../../model/userSignup");
let jwt = require("jsonwebtoken")
let key = require("../../config/token_keys")


//localhost:8080/api/user/authentication/social/site
route.get("/site", async(req, res)=>{
    let token = req.headers.authorization;
    let ID = jwt.decode(token, key);
    // console.log(ID)
    let allAccounts = await signup.find({});
    let userAccounts = allAccounts.filter(user=>user._id != ID.id)
    // console.log(userAccounts)
    res.send(userAccounts)
})

route.post("/follow/:sender/:receiver", async(req, res)=>{
    let Receiver = req.params.receiver;
    let token = req.params.sender;
    let Sender = jwt.decode(token, key);
    await signup.updateMany({ _id : Sender.id }, { $push : { request : { sender : Sender.id, receiver : Receiver } } })
    await signup.updateMany({ _id : Receiver }, { $push : { request : { sender : Sender.id, receiver : Receiver } } })
    res.send({ status : 200 })
    
})

route.get("/request", async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let ID = jwt.decode(token, key);
        let result = await signup.find({ _id : ID.id })
        // console.log(result.request)
        res.send({ status : 200, userData : result.request })
    }
})

module.exports = route;