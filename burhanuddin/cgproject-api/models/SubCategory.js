require("../config/db");
let mongoose = require("mongoose");
let SubCategorySchema = mongoose.Schema({
    Category_name : String,
    SubCategory_name : String
    
});

const SubCategoryModel = mongoose.model("subcategory", SubCategorySchema);
module.exports = SubCategoryModel