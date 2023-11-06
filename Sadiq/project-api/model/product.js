require('../config/DataBase');

let mongoose = require('mongoose');
let productSchema = mongoose.Schema({
    id : Number,
    title : String,
    price : Number,
    description : String,
    category : String,
    image : String,
    rating : Object
}, {collection : "product"});

let productModel = mongoose.model("product", productSchema);

module.exports = productModel;