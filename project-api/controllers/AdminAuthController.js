const routes = require("express").Router();
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const key = require("../config/token_key");

routes.post("/", async(req, res)=>{
    let u = req.body.username; // admin
    let p = req.body.password; // 123
    let result = await Admin.find({username : u });
    if(result.length > 0) // username correct
    {
        if(result[0].password == sha1(p)) // password correct
        {
            let obj = { id : result[0]._id};
            let token = jwt.sign(obj, key);
            res.send({ success : true, token : token});
        }
        else{ // username corr and password incorrect
            res.send({ success : false, type : 2});
        }
    }
    else{ // username is not correct
        res.send({ success : false, type : 1});
    }
})

module.exports = routes;