const mongoose = require("mongoose");
// connection stabled
mongoose.connect("mongodb://0.0.0.0:27017/tss5_new");

// data format
const studentSchema = mongoose.Schema({
    contact : String,
    fullname : String,
    email : String,
    fee : Number,
    gender : String,
    address : String,
    city : String,
    hobby : []
});

// define a collection name
const Student = mongoose.model("student", studentSchema);

module.exports = Student;