const routes = require("express").Router();
const jwt = require("jsonwebtoken");
let TokenKey= require("../config/tokenKey")
const admin = require("../models/Admins");
const sha1 = require('sha1');


routes.post("/", async(req, res)=>{
    let e = req.body.username;
    let p = req.body.password;  
    // console.log(req.body);
    let result = await admin.find({username : e});
    if(result.length >= 1)    
    {
        if(result[0].password===  sha1(p))
        {
            let obj = { id : result[0]._id};
            let token = jwt.sign(obj, TokenKey);
            res.send({success: true, token: token});
        }
        else
        {
            res.send({succes : false, type: 2})
        }
    }
    else
    {
        console.log(result);
        res.send({success : false, type : 1})
    }
})

module.exports = routes;

// routes.post("/otp", (req, res)=>{
//  let otp = random(4,'numeric');
//  console.log(random(4));
// })