const mongoose = require("mongoose");


mongoose.connect("mongodb://0.0.0.0:27017/sadiq");

const employeschema = mongoose.Schema({

    fullname : String,
    contact : Number,
    age : String,
    city : String,
    salary : Number 
})

const employemodel = mongoose.model("employe", employeschema);

module.exports = employemodel;