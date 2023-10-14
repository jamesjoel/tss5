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
    res.redirect("/account/list/view")
})

route.get("/view/:teacherid",  async (req, res)=>{
    let teacher_id = req.params.teacherid;
    let teacherdata = await teacher.find({ _id : teacher_id })
    let accountdata = await account.find({ teacher : teacher_id })
    // let accountdata = await account.find({ _id : account_id })
    let pagedata = {teacher : teacherdata[0], account : accountdata}
    res.render("pages/teacher-data", pagedata)
})

route.get("/update/:id", async (req, res)=>{
    let id = await req.params.id;
    let result = await teacher.find({ id : id });
    let pagedata = { update : result[0] }
    res.render("pages/teacher-update", pagedata)
})

module.exports = route;