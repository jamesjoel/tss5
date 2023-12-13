require("../config/db");

const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    fullname : String,
    email : String,
    contact : String,
    fee : Number,
    gender : String,
    address : String,
    city : String,
    hobby :String
})

const StudentModel = mongoose.model("Student1",StudentSchema);
module.exports = StudentModel;
