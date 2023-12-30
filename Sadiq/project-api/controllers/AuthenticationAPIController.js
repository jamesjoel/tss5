let route = require("express").Router();
let signup = require("../model/signup")
let sha = require("sha1")
let randomNum = require("random-number");
let key = require("../config/token_keys");
let jwt = require("jsonwebtoken");


route.post("/login", async(req, res)=>{
    let Password = sha(req.body.password);
    let Gmail = req.body.email
    let account = await signup.find({ email : Gmail })
    if(account.length != 0){
        let obj = { id : account[0]?._id };
        let token = jwt.sign(obj, key);
        if(account[0].password == Password.trim()){
            res.send({status : 200 , errType : 0, Token : token })
        }else{
            res.send({status : 403 ,errType : 1})
        }
    }else{
        res.send({status : 403 ,errType : 2})
    }
})

route.get("/accounts" , async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let ID = jwt.decode(token, key);
        // console.log(ID.id)
        let userData = await signup.find({ _id : ID.id });
        if(userData?.length[0] != 0){
            res.send({ status : 200, errType : 0, account : userData[0] })
        }else{
            res.send({ status : 403, errType : 1 })
        }
    }else{
        res.send({ status : 404, errType : 1 })
    }
})


module.exports = route
// route.post("/update/:id", async(req, res)=>{
//     let ID = req.params.id;
//     let contactLength = req.body.contact.split("")
//     console.log(contactLength)
//     if(contactLength.length == 10){
//         await signup.updateMany({ _id : ID }, { $set : req.body })
//         res.send({ status : 200, errType : 0 })
//     }else{
//         res.send({ status : 403, errType : 1 })
//     }
// })

// route.post("/update/password/:id", async(req, res)=>{
//     let ID = req.params.id;
//     let Password = sha(req.body.currentpassword)
//     // console.log(Password)
//     let userData = await signup.find({ _id : ID })
//     if( userData[0].length != 0){
//         if(Password == userData[0]?.password ){
//             let NewPassword = sha(req.body.changepassword)
//             await signup.updateMany({ _id : ID }, { password : NewPassword })
//             res.send({ status : 200, errType : 0 })
//         }else{
//             res.send({ status : 403, errType : 1 })
//         }
//     }else{
//         res.send({ status : 403, errType : 1 })
//     }
// })

// route.post("/forgot/password/:id", async(req, res)=>{
//     let ID = req.params.id;
//     delete req.body.rechangepassword;
//     let Password = sha(req.body.changepassword)
//     let userData = await signup.find({ _id : ID })
//     if( userData[0]?.length != 0){
//         if(userData[0]?.password == Password){
//             res.send({ status : 403, errType : 2 })
//         }else{
//             await signup.updateMany({ _id : ID }, { password : Password })
//             res.send({ status : 200, errType : 0 })
//         }
//     }else{
//         res.send({ status : 403, errType : 1 })
//     }
// })

// route.post("/number/verification/:id", async(req, res)=>{
//     let ID = req.params.id;
//     let Number = req.body.contact;
//     let NumberLength = req.body.contact.split("")
//     let userData = await signup.find({ _id : ID })
//     if(userData[0]?.length != 0){
//         if(NumberLength.length == 10){
//             let userNumber = userData[0]?.contact;
//             if(userNumber == Number){
//                 let otpGenerator = randomNum.generator({ min : 10000, max : 99999, integer : true })
//                 let OTP = otpGenerator();
//                 await signup.updateMany({ _id : ID }, { otp : OTP })
//                 res.send({ status : 200, errType : 0, otp : OTP })
//             }else{
//                 res.send({ status : 403, errType : 2 })
//             }
//         }else{
//             res.send({ status : 403, errType : 1 })
//         }
//     }
// })

// route.post("/otp/verification/:id", async(req, res)=>{
//     let ID = req.params.id;
//     let OTP = req.body.otp;
//     let userData = await signup.find({ _id : ID })
//     if(userData[0]?.length != 0){
//         if(userData[0]?.otp == OTP){
//             res.send({ status : 200, errType : 0 })
//         }else{
//             res.send({ status : 403, errType : 1 })
//         }
//     }else{
//         res.send({ status : 403, errType : 1 })
//     }
// })