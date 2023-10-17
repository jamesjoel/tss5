const routes = require("express").Router();
// const employee = require("../models/employee");

routes.get("/", (req , res)=>{
    res.render("pages/employee-info")
});

