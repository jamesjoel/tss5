require("../config/db")

const mongoose = require("mongoose")

const EmpSchema = mongoose.Schema({
    name : String,
    age : Number,
    salary : Number
}, { collection : "employee" });

module.exports = mongoose.model("employee", EmpSchema)