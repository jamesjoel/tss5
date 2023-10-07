const route = require("express").Router();
const teacher = require("../../model/teacher")
const account = require("../../model/account")


route.get("/", async (req, res)=>{
    let accountdata = await account.find({});
    let teacherdata = await teacher.find({});
    pagedata = { account : accountdata, data : teacherdata };
    res.render("pages/teacher-data", pagedata);
})

route.get("/delete/:id", async (req, res)=>{
    let dlt = req.params.id;
    await teacher.deleteMany({ id : dlt});
    await account.deleteMany({ _id : dlt});
    res.redirect("/account")
})

route.get("/view/:id",  async (req, res)=>{
    let x = req.params.id
    let teacherdata = await teacher.find({ id : x })
    let accountdata = await account.find({ _id : x })
    let pagedata = {data : teacherdata[0], account : accountdata[0]}
    res.render("pages/teacher-data", pagedata)
})

route.get("/update/:id", async (req, res)=>{
    let id = await req.params.id;
    let result = await teacher.find({ id : id });
    let pagedata = { update : result[0] }
    res.render("pages/teacher-update", pagedata)
})

module.exports = route;