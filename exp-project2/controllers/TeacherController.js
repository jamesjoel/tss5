const routes = require("express").Router();
const Teacher = require("../models/Teacher");

routes.get("/", (req, res)=>{
    res.render("pages/teacher");
})



routes.get("/list", async (req, res)=>{
    let result = await Teacher.find();

    let teacher = { list : result }

    res.render("pages/teacher-list", teacher);
})





routes.get("/info", (req, res)=>{
    res.render("pages/teacher-info");

})

routes.post("/save", async (req, res)=>{
    await Teacher.create(req.body);
    res.redirect("/teacher/list");
})


module.exports = routes;