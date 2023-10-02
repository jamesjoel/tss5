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
routes.post("/save", async (req, res)=>{
    await Teacher.create(req.body);
    res.redirect("/teacher/list");
})

routes.get("/delete/:a", async(req, res)=>{
    let x = req.params.a;
    
    await Teacher.deleteMany({ _id : x});
    res.redirect("/teacher/list")
})

routes.get("/view/:a", async(req, res)=>{
    let x = req.params.a;
    let result = await Teacher.find({ _id : x });
    let pagedata = { data : result[0] };
    res.render("pages/teacher-info", pagedata)
})






routes.get("/info/:a/:b", (req, res)=>{
    // console.log(req.params);
    let x = req.params.a;
    let y = req.params.b;
})


module.exports = routes;