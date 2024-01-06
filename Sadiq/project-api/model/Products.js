require("../config/DataBase")
let mongoose = require("mongoose")

let productSchema = mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    discount : Number,
    category : String,
    subcategory : String,
    createdat : { type : Date, default : new Date() },
    image : String

}, {collection : "products"})

module.exports = mongoose.model("products", productSchema);
