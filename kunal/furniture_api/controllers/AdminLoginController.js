const routes = require("express").Router()
const Admin = require("../Models/Admin")
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")

//  localhost : 8080/api/admin

routes.post("/login", async(req,res)=>{
    // console.log(req.body)
    let n = req.body.name
    let p = req.body.password
    let result = await Admin.find({name : n})
    // console.log(result)
    if(result.length > 0){
        if(result[0].password == sha1(p)){

            let obj = {id : result[0]._id}
            let token = jwt.sign(obj, "lorem", {expiresIn : '2d'})
            res.send({success : true, token : token})

        }else{
            res.send({success : false, errType : 2})
        }

    }else{
        res.send({success : false, errType : 1})
    }
})

module.exports = routes