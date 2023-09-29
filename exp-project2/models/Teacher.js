const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/tss5_new");

const TeacherSchema = mongoose.Schema({
    fullname : String,
    class : Number,
    salary : Number,
    education : String
})

let TeacherModel = mongoose.model("teacher", TeacherSchema);

module.exports = TeacherModel;