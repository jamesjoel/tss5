const routes = require("express").Router()
const User = require("../Models/User")
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")

routes.post("/", async(req, res)=>{
    // console.log(req.body)
    let e = req.body.email
    let p = req.body.password
    let result = await User.find({email : e})
    //  console.log(result)
    if(result.length > 0){
        if(result[0].password == sha1(p)){

            let obj = {id : result[0]._id}
            let token = jwt.sign(obj, "xyz", {expiresIn : '2d'})
            res.send({success : true, token : token})

        }else{
            res.send({success : false, errType : 2})
        }

    }else{
        res.send({success : false, errType : 1})
    }


})

module.exports = routes