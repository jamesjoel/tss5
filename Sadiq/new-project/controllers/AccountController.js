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

route.get("/list", async (req, res)=>{
    let accountdata = await account.find({});
    let teacherdata = await teacher.find({});
    pagedata = { account : accountdata, data : teacherdata };
    res.render("pages/account-list", pagedata);
})

route.get("/view/:id", async (req, res)=>{
    let id = req.params.id;
    let accountdata = await account.find({_id : id})
    let teacherdata = await teacher.find({ id : id})
    let pagedata = { account : accountdata[0], data : teacherdata[0] }
    res.render("pages/account-login", pagedata)
})

route.get("/login/:a", (req, res)=>{

})

route.get("/delete/:a", async (req ,res)=>{
    let x = req.params.a;
    await account.deleteMany({ _id : x })
    await teacher.deleteMany({ id : x })
    res.redirect("/account/list")
})

route.get("/authentication/:number", async (req, res)=>{
    let number = req.params.number;
    let accountdata = await account.find({number : number})
    let teacherdata = await teacher.find({ number : number})
    let pagedata = { account : accountdata[0], data : teacherdata[0] }
    res.render("pages/account-authentication", pagedata)
})

route.post("/signup", async (req, res)=>{
    req.body = jason.Parse(req.body)
    const pass = await account.find({password : req.body})
    if(pass.length > 0){
        res.redirect("/account/view");
    }
})

module.exports = route;