let route = require("express").Router();
let NUM = require('random-number');

route.get("/", (req, res)=>{
    res.render("pages/verification")
});

route.post("/otp", async (req, res)=>{
   let response = await req.body;
   console.log(response)
   res.redirect(`/verification/OTP-verification/`+response.otp)
})

route.get("/otp-verification", (req, res)=>{
    let Gen = NUM.generator({ min : 1000, max : 9999, integer : true });
    let otp = Gen();
    // console.log(otp)
    let pagedata = { otp : otp, status : 200 }
    res.status(200).render("pages/OTPverification", pagedata)
})

route.get("/OTP-verification/:response", (req, res)=>{
    let response = req.params.response;
    // console.log(otp)
    console.log(response)
    let pagedata = { status : 200, response : response }
    res.status(200).render("pages/OTPverification-match", pagedata)
})

module.exports = route;