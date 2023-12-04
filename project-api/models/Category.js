require("../config/db");
const mongoose = require("mongoose");

const CateSchema = mongoose.Schema({
    name : String
})

module.exports = mongoose.model("category", CateSchema)