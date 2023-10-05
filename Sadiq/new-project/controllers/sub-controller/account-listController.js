const route = require("express").Router();
const account = require("../../model/account");
const teacher = require("../../model/teacher")

route.get("/", async (req, res)=>{
    let accountdata = await account.find({});
    let teacherdata = await teacher.find({});
    pagedata = { account : accountdata, data : teacherdata };
    res.render("pages/account-list", pagedata);
})

route.get("/view/:id", async (req, res)=>{
    let id = req.params.id;
    let accountdata = await account.find({ id : id })
    let teacherdata = await teacher.find({ id : id })
    let pagedata = { account : accountdata[0], data : teacherdata[0] }
    res.render("pages/account-login", pagedata)
})


module.exports = route;