require("../config/db")
const mongoose = require("mongoose")

CateSchema = mongoose.Schema({
    name : String
},{collection : "category"})

module.exports = mongoose.model("category", CateSchema)