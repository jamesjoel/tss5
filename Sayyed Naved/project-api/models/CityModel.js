require("../config/Database")
let mongoose = require ("mongoose");

let cityschema = mongoose.Schema({
    id :  String,
    name : String,
    state : String

}, {collection :  "city"})

let citymodel = mongoose.model("city", cityschema) 
module.exports = citymodel