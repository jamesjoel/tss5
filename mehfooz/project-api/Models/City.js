require('../config/db');
let mongoose = require("mongoose");


let CitySchema = mongoose.Schema({
    id:String,
    state:String,
    city:String,
    
}, {collection : "city"})

let CityModel = mongoose.model("city",CitySchema);



module.exports = CityModel;