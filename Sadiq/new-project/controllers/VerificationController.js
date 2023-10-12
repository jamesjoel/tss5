let route = require("express").Router();
let NUM = require('random-number');
let OtpModel = require("../model/OTP");


route.get("/", (req, res)=>{
    res.render("pages/verification")
});

route.post("/otp", async (req, res)=>{
    await OtpModel.create(req.body);
    res.redirect("/verification/otp-verification")
})

route.get("/otp-verification", async (req, res)=>{
    let response = await OtpModel.find({});
    let Gen = NUM.generator({ min : 1000, max : 9999, integer : true });
    let otp = Gen();
    // console.log(otp)
    let pagedata = { otp : otp, status : 200, response : response }
    res.status(200).render("pages/OTPverification", pagedata)
})

module.exports = route;