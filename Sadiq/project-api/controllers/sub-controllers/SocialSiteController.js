let route = require("express").Router()
let signup = require("../../model/userSignup");
let jwt = require("jsonwebtoken")
let key = require("../../config/token_keys")


//localhost:8080/api/user/authentication/social/site
route.get("/site", async(req, res)=>{
    let token = req.headers.authorization;
    let ID = jwt.decode(token, key);
    // console.log(ID)
    let userAccounts = await signup.find({});
    userAccounts.forEach(value => {
        if(value._id != ID.id){
            let accounts = value;
        }
    });
    console.log(userAccounts)
    res.send(userAccounts)
})

module.exports = route;