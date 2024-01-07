let route = require("express").Router()
let signup = require("../../model/userSignup");
let jwt = require("jsonwebtoken")
let key = require("../../config/token_keys");
const FrndRequest = require("../../model/FrndRequest");


//localhost:8080/api/user/authentication/social/site
route.get("/site", async(req, res)=>{
    let token = req.headers.authorization;
    let ID = jwt.decode(token, key);
    // console.log(ID)
    let allAccounts = await signup.find({});
    let User = await FrndRequest.find({senderid : ID.id});
    let userAccounts = allAccounts.filter(user=>user._id != ID.id)
    // console.log(userAccounts)
    res.send({accounts : userAccounts, user : User})
})

route.post("/follow/:sender/:receiver", async(req, res)=>{
    let receiverId = req.params.receiver;
    let token = req.params.sender;
    let senderId = jwt.decode(token, key);
    let reqData = {
        receiverid : receiverId,
        senderid : senderId.id
    }
    await FrndRequest.create(reqData)
    res.send({ status : 200 })
    
})

route.get("/request", async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let ID = jwt.decode(token, key);
        let reqData = await FrndRequest.find({ senderid : ID.id })
        let Sender = await signup.find({ _id : ID.id })
        let allRequests = [];
        reqData.forEach(value => {
            if(reqData.senderid != value.receiverid){
                allRequests = value.receiverid
            }
        });
        console.log(allRequests)
        
        res.send({ status : 200 })
    }
})

module.exports = route;