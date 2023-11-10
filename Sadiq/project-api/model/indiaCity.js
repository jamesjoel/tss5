require("../config/DataBase")

let mongoose = require("mongoose")

let citySchema = mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "indiacity"})

let cityModel = mongoose.model("indiacity", citySchema);

module.exports = cityModel;