require("../config/db");

const mongoose = require("mongoose")

const PatientsSchema = mongoose.Schema({
    name : String,
    age : Number,
    address : String
}) 

const PatientsModel = mongoose.model("patient", PatientsSchema);

module.exports = PatientsModel;