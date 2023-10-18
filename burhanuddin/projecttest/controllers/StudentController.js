const routes = require("express").Router();
const student = require("../models/student");

routes.get("/", async(req , res)=>{
    let result = await student.find();
    let pagedata = { data : result};
    res.render("pages/student-list", pagedata);
})

routes.get("/add", (req , res)=>{
    res.render("pages/student-add");
})

routes.post("/save", async(req , res)=>{
    await student.create(req.body);
    res.redirect("/student");
})

routes.get("/delete/:id", async(req, res)=>{
    let id = req.params.id;
    await student.deleteMany({_id : id});
    res.redirect("/student");
})

routes.get("/edit/:id", async(req , res)=>{
    let id = req.params.id;
    let result = await student.find({_id : id});
    
    let pagedata = {data : result[0]};
    res.render("pages/student-edit", pagedata);
})

routes.get("/view/:id", async(req , res)=>{
    let id = req.params.id;
    let result = await student.find({_id : id});
    
    let pagedata = {data : result[0]};
    res.render("pages/student-view", pagedata);
})

routes.post("/update/:id", async(req, res)=>{
    let id = req.params.id;
    await student.updateMany({_id : id}, req.body);
    res.redirect("/student");
})
module.exports = routes ; 