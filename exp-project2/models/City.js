require("../config/db");
const mongoose = require("mongoose");

const CitySchema = mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "city"});

const CityModel = mongoose.model("city", CitySchema);

module.exports = CityModel;