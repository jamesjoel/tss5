const routes = require("express").Router();
const employee = require("../models/employee");


routes.get("/", async(req , res)=>{
    let result = await employee.find();
    let pagedata = {data : result}
    res.render("pages/employee-list", pagedata)
})

// routes.get("/save", async(req , res)=>{
//     await employee.create(req.body);
//     res.redirect(/info/employee);
// })

routes.get("/delete/:id", async(req , res)=>{
    let id = req.params.id;
    await employee.deleteMany({_id : id});
    res.redirect("/info/employee")
})

routes.get("/edit/:id", async(req , res)=>{
    let id = req.params.id;
    let result = await employee.find({_id : id});
    let pagedata = {data : result[0]};
    res.render("pages/employee-edit", pagedata)
})

routes.post("/update/:id", async(req , res)=>{
    let id = req.params.id;
    await employee.updateMany({_id : id}, req.body());
    res.redirect("/info/employee")
})



module.exports = routes ; 