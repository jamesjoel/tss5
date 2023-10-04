require("../config/Database")

const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
    fullname : String,
    class : Number,
    salary : Number,
    education : String,
    id : { type : String, default : "651d15c9afaacf2696360bd7" }
})

const teacherModel = mongoose.model("teacher", teacherSchema);

module.exports = teacherModel;