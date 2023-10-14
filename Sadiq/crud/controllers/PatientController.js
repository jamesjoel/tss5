let route = require("express").Router();
let patient = require("../model/HospitalMgm");

route.get("/", (req, res)=>{
    res.render("pages/patients")
})

route.post("/add", async (req, res)=>{
    await patient.create(req.body)
    res.redirect("/patients/list")
})

route.get("/list", async (req, res)=>{
    let patientdata = await patient.find({});
    let pagedata = { patient : patientdata }
    res.render("pages/patients-list", pagedata)
})

route.get("/delete/:id", async (req, res)=>{
    let id = req.params.id;
    await patient.deleteMany({ _id : id })
    res.redirect("/patients/list")
})

route.get("/update/:id", async (req, res)=>{
    let id = req.params.id;
    let patientdata = await patient.find({ _id : id })
    let pagedata = { patient : patientdata[0] }
    res.render("pages/patients-update", pagedata)
})

route.get("/view/:id", async (req, res)=>{
    let id = req.params.id;
    let patientdata = await patient.find({ _id : id })
    let pagedata = { patient : patientdata[0] }
    res.render("pages/patients-data", pagedata)
})

route.post("/update/add/:id", async (req, res)=>{
    let id = req.params.id;
    await patient.updateMany({ _id : id }, req.body)
    res.redirect("/patients/list")
})

module.exports = route;