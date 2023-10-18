require("../config/db");

const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema({
    name : String,
    age: Number,
    gender: String,
    position: String
})

const employeeModel = mongoose.model("employee", employeeSchema);

module.exports = employeeModel;
