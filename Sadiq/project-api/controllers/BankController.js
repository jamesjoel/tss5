let route = require("express").Router();
let key = require("../config/token_keys")
let jwt = require("jsonwebtoken")
let sha = require("sha1")
let userSignup = require("../model/userSignup")
let bankSignup = require("../model/BankUser")
let randomNum = require("random-number");


route.post("/signup", async(req, res)=>{
    // console.log(req.body)
    let Email = req.body.email;
    let UserName = req.body.username;
    let Password = sha(req.body.password);
    let userData = await userSignup.find({ email : Email })
    // console.log(userData[0])
    if(userData?.length != 0){
        if(userData[0]?.password === Password){
            let accounts = await bankSignup.find({ email : Email })
            if(accounts.length == 0){
                let IMPData = await bankSignup.create(req.body);
        // Generating Account Number
            let AccGen = randomNum.generator({ min : 100000000000, max : 999999999999, integer : true })
            let accountNumber = AccGen();
        // Generating Account Number

        //Generating UPI ID
        let UPI_ID = "KER"+userData[0]?.contact;
        //Generating UPI ID

            IMPData.account_no = accountNumber;
            IMPData.upi_id = UPI_ID;
            IMPData.password = Password;
            // console.log(IMPData)
            await bankSignup.updateMany({ email : Email }, IMPData )
            res.send({ status : 200, errType : 0 })
            }else{
                res.send({ status : 403, errType : 3 })
            }
        }else{
            res.send({ status : 403, errType : 2 })
        }
    }else{
        res.send({ status : 403, errType : 1 })
    }
})

route.post("/login", async(req, res)=>{
    let Email = req.body.email;
    let Password = sha(req.body.password);
    let userData = await bankSignup.find({ email : Email });
    if(userData?.length != 0){
        if(userData[0]?.password === Password){
            let obj = { id : userData[0]?._id }
            let token = jwt.sign(obj, key);
            res.send({ status : 200, errType : 0, token : token })
        }else{
            res.send({ status : 403, errType : 2 })
        }
    }else{
        res.send({ status : 403, errType : 1 })
    }
})

module.exports = route;