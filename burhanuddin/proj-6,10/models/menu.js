require("../config/db");

const mongoose = require("mongoose")
 const MenuSchema = mongoose.Schema({
    dish : String,
    ingredients : String,
    price : Number
 })


 const MenuModel = mongoose.model("menu", MenuSchema);

 module.exports = MenuModel; 