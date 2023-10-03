const route = require("express").Router();
const account = require("../model/account");
const teacher = require("../model/teacher");

route.get("/", (req, res)=>{
    res.render("pages/account")
})

route.post("/save", async (req, res)=>{
    await account.create(req.body);
    res.redirect("/account");
})

route.get("/list", async (req, res)=>{
    let accountdata = await account.find({});
    let teacherdata = await teacher.find({});
    pagedata = { account : accountdata, data : teacherdata };
    res.render("pages/account-list", pagedata);
})

route.get("/view/:a", async (req, res)=>{
    let x = req.params.a;
    let accountdata = await account.find({number : x})
    let teacherdata = await teacher.find({ number : x})
    let pagedata = { account : accountdata[0], data : teacherdata[0] }
    res.render("pages/account-login", pagedata)
})

route.get("/login/:a", (req, res)=>{

})

route.get("/delete/:a/:b", async (req ,res)=>{
    let x = req.params.a;
    let y = req.params.b;
    await account.deleteMany({ _id : x })
    await teacher.deleteMany({ _id : y })
    res.redirect("/account/list")
})

route.post("/authentication/:a", (req, res)=>{
    let x = req.params.a;
    

})

module.exports = route;