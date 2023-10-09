require("../config/Database")


const mongoose = require("mongoose");



const employeschema = mongoose.Schema({

    fullname : String,
    contact : Number,
    age : String,
    city : String,
    salary : Number 
})

const employemodel = mongoose.model("employe", employeschema);

module.exports = employemodel;