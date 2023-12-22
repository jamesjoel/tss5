require("../config/db")
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title : String,
    price : String,
    category : String,
    subcategory :String,
    quantity : String,
    detail : String,
    discount : String,
    createAt : {type : Date, default : new Date()}
}, {collection : "product"})

module.exports = mongoose.model("product", ProductSchema)