require("../config/DataBase")
let mongoose = require("mongoose")

let categorySchema = mongoose.Schema({
    category : String
}, {collection : "category"})

module.exports = mongoose.model("category", categorySchema);
