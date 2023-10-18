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

module.exports = routes ; 