const route = require("express").Router();
const teacher = require("../model/teacher")

route.get("/", (req, res)=>{
    res.render("pages/teacher")
})

route.get("/list", async (req, res)=>{
    const result = await teacher.find({});
    const pagedata = {data : result}
    res.render("pages/teacher-list", pagedata)
})

route.post("/save", async (req, res)=>{
    await teacher.create(req.body)
    res.redirect("/teacher")
})

module.exports = route;