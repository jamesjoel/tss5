const routes = require("express").Router();
const Patients = require("../models/Patients")
const TempPatients = require("../models/TempPatients");

routes.get("/", async(req, res)=>{
    let result = await Patients.find({ status : 1  });
    let pagedata = { data : result }
    res.render("pages/patients-list", pagedata);
    
})





routes.get("/add", (req, res)=>{
    res.render("pages/patients-add");
    
})
routes.post("/save", async(req, res)=>{

    req.body.status = 1;

    await Patients.create(req.body);
    res.redirect("/patients");
})




routes.get("/remove/:id", async(req, res)=>{
    let id = req.params.id;
    // let result = await Patients.find({_id : id});

    // let obj = {
    //     name : result[0].name,
    //     age : result[0].age,
    //     address : result[0].address
    // }
    
    
    
    // await TempPatients.create(obj);


    // await Patients.deleteMany({ _id : id });
    await Patients.updateMany({ _id : id }, {status : 0});
    res.redirect("/patients");
})

routes.get("/edit/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Patients.find({_id : id });

    let pagedata = {data : result[0]};
    res.render("pages/patients-edit", pagedata)
})

routes.post("/change/:id", async(req, res)=>{
    let id = req.params.id;
    await Patients.updateMany({_id : id}, req.body);
    let x = 100;
    res.redirect("/patients");
})

module.exports = routes;

/*

    var obj = { name : rohit, age : 25}
    obj.gender = "male"

*/