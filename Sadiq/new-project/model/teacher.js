require("../config/Database")

const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
    fullname : String,
    class : Number,
    salary : Number,
    education : String,
    number : Number
})

const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;