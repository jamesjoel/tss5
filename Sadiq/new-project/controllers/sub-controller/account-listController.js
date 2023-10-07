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


module.exports = route;