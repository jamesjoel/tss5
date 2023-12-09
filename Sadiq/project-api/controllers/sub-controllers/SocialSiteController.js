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

route.get("/follow", (req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let ID = jwt.decode(token, key);
        console.log(ID)
        console.log(req.headers)
    }
})

module.exports = route;