const route = require("express").Router();
const account = require("../../model/account");
const teacher = require("../../model/teacher");


route.get("/:id", async (req, res)=>{
    let id = req.params.id;
    let accountdata = await account.find({ _id : id})
    let pagedata = { account : accountdata[0] }
    res.render("pages/account-authentication", pagedata)
})

route.get("/delete/:id", async (req ,res)=>{
    let x = req.params.id;
    await account.deleteMany({ _id : x })
    res.redirect("/account/list")
})

route.post("/signup", async (req, res)=>{
    // req.body = JSON.parse(req.body)
    // const pass = await account.find({password : req.body})
    // if(pass.length > 0){
    //     res.redirect("/account/list/view");
    // }
})

module.exports = route;