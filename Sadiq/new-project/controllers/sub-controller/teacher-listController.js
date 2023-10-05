const route = require("express").Router();
const teacher = require("../../model/teacher")



route.get("/", async (req, res)=>{
    const result = await teacher.find({});
    const pagedata = {data : result}
    res.render("pages/teacher-list", pagedata)
})

route.get("/delete/:a", async (req, res)=>{
    let dlt = req.params.a;
    await teacher.deleteMany({ _id : dlt});
    res.redirect("/teacher/list")
})

route.get("/view/:a",  async (req, res)=>{
    let x = req.params.a
    let result = await teacher.find({ _id : x })
    let pagedata = {data : result[0]}
    res.render("pages/teacher-info", pagedata)
})

module.exports = route;