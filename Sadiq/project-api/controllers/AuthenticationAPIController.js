let route = require("express").Router();
let signup = require("../model/signup")
let sha = require("sha1")

route.post("/signup", async(req, res)=>{
    req.body.password = sha(req.body.password);
    let email = req.body.email;
    let account = await signup.find({ email : email })
    if(account.length == 0){
        await signup.create(req.body)
        res.send({success : true})
    }else{
        res.send({ success : false })
    }
})

route.post("/login", async(req, res)=>{
    let Password = sha(req.body.password);
    let Gmail = req.body.email
    let account = await signup.find({ email : Gmail })
    if(account.length != 0){
        let ID = sha(account[0]._id)
        if(account[0].password == Password.trim()){
            res.send({status : 200 , errType : 0, address : ID })
        }else{
            res.send({status : 403 ,errType : 1})
        }
    }else{
        res.send({status : 403 ,errType : 2})
    }
})

route.get("/accounts" , async(req, res)=>{
    let accounts = await signup.find({})
    res.send(accounts)
})

module.exports = route