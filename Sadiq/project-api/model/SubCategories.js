require("../config/DataBase")
let mongoose = require("mongoose")

let subcategorySchema = mongoose.Schema({
    subcategory : String,
    category : String
}, {collection : "subcategory"})

module.exports = mongoose.model("subcategory", subcategorySchema);
