require("../config/db")
const mongoose = require("mongoose")

const AdminSchema = mongoose.Schema({
    name : String,
    password : String
}, {collection : "admin"})

module.exports = mongoose.model("admin", AdminSchema)