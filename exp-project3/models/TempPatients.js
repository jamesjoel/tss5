require("../config/db");

const mongoose = require("mongoose")

const TempPatientsSchema = mongoose.Schema({
    name : String,
    age : Number,
    address : String
}) 

const TempPatientsModel = mongoose.model("temppatient", TempPatientsSchema);

module.exports = TempPatientsModel;