require("../config/dataBase");

const { default: mongoose } = require("mongoose");
let momgoose = require("mongoose");

let patientSchema = mongoose.Schema({
    name : String,
    age : Number,
    contact : Number,
    gender : String,
    address : String
}, { collection : "patient" });

let patientModel = mongoose.model("patient", patientSchema);

module.exports = patientModel;