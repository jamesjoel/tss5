require("../config/Database");

let mongoose = require("mongoose");

let dataSchema = mongoose.Schema({
    userId: String,
    id : String,
    title : String
}, { collection : "data" });

let dataModel = mongoose.model("data", dataSchema);

module.exports = dataModel;