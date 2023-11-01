require("../config/db");

const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
    fullname : String,
    class : Number,
    education : String,
    salary : Number,
    gender : String
})

const TeacherModel = mongoose.model("teacher", TeacherSchema);

module.exports = TeacherModel;