const routes = require("express").Router();
const Patients = require("../models/Patients")

routes.get("/", async(req, res)=>{
    let result = await Patients.find();
    let pagedata = { data : result }
    res.render("pages/patients-list", pagedata);
    
})
routes.get("/add", (req, res)=>{
    res.render("pages/patients-add");
    
})
routes.post("/save", async(req, res)=>{
    await Patients.create(req.body);
    res.redirect("/patients");
})

routes.get("/delete/:id", async(req, res)=>{
    let id = req.params.id;
    await Patients.deleteMany({ _id : id });
    res.redirect("/patients");
})

routes.get("/edit/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Patients.find({_id : id });

    let pagedata = {data : result[0]};
    res.render("pages/patients-edit", pagedata)
})

routes.post("/update/:id", async(req, res)=>{
    let id = req.params.id;
    await Patients.updateMany({_id : id}, req.body);
    let x = 100;
    res.redirect("/patients");
})

module.exports = routes;