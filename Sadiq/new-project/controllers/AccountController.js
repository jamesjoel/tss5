const route = require("express").Router();
const account = require("../model/account");
const teacher = require("../model/teacher")

route.get("/", (req, res)=>{
    res.render("pages/account")
})

route.post("/save", async (req, res)=>{
    let id = await account.create(req.body);
    localStorage.setItem("id", id._id)
    res.redirect("/account");
})

route.use("/list", require("./sub-controller/account-listController"));
route.use("/authentication", require("./sub-controller/account-authenticationController"));

route.get("/login/:a", (req, res)=>{

})



module.exports = route;