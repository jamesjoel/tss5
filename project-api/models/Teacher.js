require("../config/db");

const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
    fullname : String,
    salary : Number
    
})

const TeacherModel = mongoose.model("teacher", TeacherSchema);

module.exports = TeacherModel;