require("../config/db");

const mongoose = require("mongoose");
const EmployeeSchema = mongoose.Schema({
    name : String,
    age : Number,
    position : String,
    salary : number
})

const EmployeeModel = mongoose.model("employee", EmployeeSchema);

module.exports = EmployeeModel;
