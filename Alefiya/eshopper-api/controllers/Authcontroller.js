let routes = require("express").Router();
const user = require("../models/user");
const sha1 = require("sha1");
let jwt = require("jsonwebtoken")
let key = require("../config/token_keys");


routes.post("/", async (req, res) => {
    let Password = sha1(req.body.password);
    let Gmail = req.body.name
    let account = await user.find({ email : Gmail })
    console.log(account[0])

    if(account[0]?.length != 0){
        let obj = { id : account[0]?._id };
        let token = jwt.sign(obj, key);
        if(account[0]?.password == Password.trim()){
            res.send({status : 200 , errType : 0, Token : token })
        }else{
            res.send({status : 403 ,errType : 1})
        }
    }else{
        res.send({status : 403 ,errType : 2})
    }
})

module.exports = routes;