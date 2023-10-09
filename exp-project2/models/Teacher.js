require("../config/db");

const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
    fullname : String,
    class : Number,
    salary : Number,
    education : String,
    gender : String
})

let TeacherModel = mongoose.model("teacher", TeacherSchema);

module.exports = TeacherModel;