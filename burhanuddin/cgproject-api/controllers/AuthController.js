const routes = require("express").Router();
const user = require("../models/user");
const sha1 = require('sha1');
let jwt = require("jsonwebtoken");
let TokenKey= require("../config/tokenKey")

//localhost:8080/api/login

routes.post("/", async(req, res)=>{
    let e = req.body.username;
    let p = req.body.password;
    let result = await user.find({email : e});
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
        res.send({success : false, type : 1})
    }
})


module.exports = routes;