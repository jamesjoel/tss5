require("../config/db");

let mongoose = require("mongoose");
 let CitySchema = mongoose.Schema((
    id : String,
    name : String,
    state : String,

 ))

 let CityModel = mongoose.model("city", c=CitySchema);
  module.exports =CityModel
  