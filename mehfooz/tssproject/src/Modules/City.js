require('./config/db');
let mongoose = require("mongoose");


let CitySchema = mongoose.Schema({
    id:"string",
    state:"string",
    city:"string",
    
}, {collection : "city"})

let CityModel = mongoose.model("city",CitySchema);



module.exports = CityModel;