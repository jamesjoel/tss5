let route = require("express").Router();
let sha = require("sha1");
let jwt = require("jsonwebtoken");
let signup = require("../model/userSignup");
let key = require("../config/token_keys");
let randomNum = require("random-number");

//localhost:8080/api/user/authentication/social
route.use("/social", require("./sub-controllers/SocialSiteController"))

//localhost:8080/api/user/authentication/signup
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

//localhost:8080/api/user/authentication/login
route.post("/login", async(req, res)=>{
    let Password = sha(req.body.password);
    let Gmail = req.body.email
    let account = await signup.find({ email : Gmail })
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

//localhost:8080/api/user/authentication/accounts
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

//localhost:8080/api/user/authentication/update
route.post("/update", async(req, res)=>{
    if(req.headers.authorization){
        let contactLength = req.body.contact.split("")
        let token = req.headers.authorization;
        let ID = jwt.decode(token, key);
        if(contactLength.length == 10){
            await signup.updateMany({ _id : ID.id }, { $set : req.body })
            res.send({ status : 200, errType : 0 })
        }else{
            res.send({ status : 403, errType : 1 })
        }
    }else{
        res.send({ status : 404, errType : 1 })
    }
})

//localhost:8080/api/user/authentication/update/password
route.post("/update/password", async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let ID = jwt.decode(token, key);
        let Password = sha(req.body.currentpassword)
        let userData = await signup.find({ _id : ID.id })
        console.log(userData[0])
        if( userData[0]?.length != 0){
            if(Password == userData[0]?.password ){
                let NewPassword = sha(req.body.changepassword)
                await signup.updateMany({ _id : ID.id }, { password : NewPassword })
                res.send({ status : 200, errType : 0 })
            }else{
                res.send({ status : 403, errType : 1 })
            }
        }else{
            res.send({ status : 403, errType : 1 })
        }
    }
})

//localhost:8080/api/user/authentication/forgot/password
route.post("/forgot/password", async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let ID = jwt.decode(token, key);
        delete req.body.rechangepassword;
        let Password = sha(req.body.changepassword)
        let userData = await signup.find({ _id : ID.id })
        if( userData[0]?.length != 0){
            if(userData[0]?.password == Password){
                res.send({ status : 403, errType : 2 })
            }else{
                await signup.updateMany({ _id : ID.id }, { password : Password })
                res.send({ status : 200, errType : 0 })
            }
        }else{
            res.send({ status : 403, errType : 1 })
        }
    }
})

//localhost:8080/api/user/authentication/number/verification
route.post("/number/verification", async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let ID = jwt.decode(token, key);
        let Number = req.body.contact;
        let NumberLength = req.body.contact.split("")
        let userData = await signup.find({ _id : ID.id })
        if(userData[0]?.length != 0){
            if(NumberLength.length == 10){
                let userNumber = userData[0]?.contact;
                if(userNumber == Number){
                    let otpGenerator = randomNum.generator({ min : 10000, max : 99999, integer : true })
                    let OTP = otpGenerator();
                    await signup.updateMany({ _id : ID.id }, { otp : OTP })
                    res.send({ status : 200, errType : 0, otp : OTP })
                }else{
                    res.send({ status : 403, errType : 2 })
                }
            }else{
                res.send({ status : 403, errType : 1 })
            }
        }
    }
})

//localhost:8080/api/user/authentication/otp/verification
route.post("/otp/verification", async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let ID = jwt.decode(token, key);
        let OTP = req.body.otp;
        let userData = await signup.find({ _id : ID.id })
        if(userData[0]?.length != 0){
            if(userData[0]?.otp == OTP){
                res.send({ status : 200, errType : 0 })
            }else{
                res.send({ status : 403, errType : 1 })
            }
        }else{
            res.send({ status : 403, errType : 1 })
        }
    }
})

//localhost:8080/api/user/authentication/update/profile
route.post("/update/profile", async(req, res)=>{
    if(req.headers.authorization){
        let token = req.headers.authorization;
        let ID = jwt.decode(token, key);
        let userData = await signup.find({ _id : ID.id });
        if(userData[0]?.length != 0){
            await signup.updateMany({ _id : ID.id }, req.body );
            res.send({ status : 200, errType : 0 })
        }else{
            res.send({ status : 403, errType : 1 })
        }
    }
})


module.exports = route;