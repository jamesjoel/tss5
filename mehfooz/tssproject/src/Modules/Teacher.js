require("./config/db");
const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
    name : String,
    class : Number,


})


const TeacherModel = mongoose.model("Teacher",TeacherSchema);


module.exports=TeacherModel;
