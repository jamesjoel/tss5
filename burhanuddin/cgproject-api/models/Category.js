require("../config/db");
let mongoose = require("mongoose");
let CategorySchema = mongoose.Schema({
    Category_name : String
    
});

const CategoryModel = mongoose.model("category", CategorySchema);
module.exports = CategoryModel