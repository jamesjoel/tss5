require("../config/db");


const mongoose = require("mongoose");

const PatientsSchema = mongoose.Schema({
    id: String,
    name: String,
    state: String
})

const PatientsModel = mongoose.model("Patientscollection", PatientsSchema);

module.exports = PatientsModel;