require("../config/db");
const mongoose = require("mongoose");

const CitySchema = mongoose.Schema({
    id: String,
    name: String,
    state: String
})

const CityModel = mongoose.model("Citycollection", CitySchema);

module.exports = CityModel;