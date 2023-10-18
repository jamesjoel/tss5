const routes = require("express").Router();
const employee = require("../models/employee");

routes.get("/", (req , res)=>{
    res.render("pages/info-page")
})

routes.use("/employee", require("../SubControllers/EmployeeController"));

routes.get("/add", (req , res)=>{
    res.render("pages/employee-add")
})
routes.post("/save", async(req , res)=>{
    await employee.create(req.body);
    res.redirect("/info/employee");
})
module.exports = routes ; 