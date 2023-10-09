const route = require("express").Router();
const account = require("../../model/account");
const teacher = require("../../model/teacher")

route.get("/", async (req, res)=>{
    let accountdata = await account.find({});
    let teacherdata = await teacher.find({});
    pagedata = { account : accountdata, teacher : teacherdata };
    res.render("pages/account-list", pagedata);
})

route.get("/view", async (req, res)=>{
    let accountdata = await account.find({})
    let teacherdata = await teacher.find({})
    let pagedata = { account : accountdata[0], teacher : teacherdata[0] }
    res.render("pages/account-login", pagedata)
})

route.get("/delete/:id", async (req, res)=>{
    let dlt = req.params.id;
    await teacher.deleteMany({ id : dlt});
    await account.deleteMany({ _id : dlt});
    res.redirect("/account/list")
})


module.exports = route;