require("../config/db");

const mongoose = require("mongoose")
 const StudentSchema = mongoose.Schema({
    name: String,
    address : String,
    fee : Number
 })


 const StudentModel = mongoose.model("student", StudentSchema);

 module.exports = StudentModel; 