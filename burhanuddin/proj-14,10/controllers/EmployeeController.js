const routes = require("express").Router();
// const employee = require("../models/employee");

routes.get("/", (req , res)=>{
    res.render("pages/employee-front");
}
)

routes.get("/employee-info", require("../sub-controllers/EmployeeInfoController"));

module.exports = routes; 

