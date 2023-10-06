const route = require("express").Router();
const account = require("../model/account");
const teacher = require("../model/teacher")

route.get("/", (req, res)=>{
    res.render("pages/account")
})

route.post("/save", async (req, res)=>{
    await account.create(req.body);
    res.redirect("/account");
})

route.use("/list", require("./sub-controller/account-listController"));
route.use("/authentication", require("./sub-controller/account-authenticationController"));

route.get("/login/:a", (req, res)=>{

})



module.exports = route;