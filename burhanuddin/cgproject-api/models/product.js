require("../config/db")
const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
    name : String,
    value : String
})

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
