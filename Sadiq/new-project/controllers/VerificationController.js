let route = require("express").Router();
let NUM = require('random-number');

route.get("/", (req, res)=>{
    res.render("pages/verification")
});

route.post("/otp", async (req, res)=>{
   let response = await req.body;
   console.log(response)
})

route.get("/otp-verification", (req, res)=>{
    let Gen = NUM.generator({ min : 1000, max : 9999, integer : true });
    let otp = Gen();
    // console.log(otp)
    let pagedata = { otp : otp, status : 200, alrt : true }
    res.status(200).render("pages/OTPverification", pagedata)
})

module.exports = route;