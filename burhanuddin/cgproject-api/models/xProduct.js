require("../config/db");
let mongoose = require("mongoose");
let ProductSchema = mongoose.Schema({
   
        Category_name: String,
        SubCategory_name : String,
        Product_name : String,
        productPrice : String,
        productQuantity : String,
        productDescription : String
    
});

const ProductModel = mongoose.model("category", ProductSchema);
module.exports = ProductModel