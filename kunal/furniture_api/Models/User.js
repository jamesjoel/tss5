require("../config/db")
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    gender : String,
    contact : String,
    state : String,
    city : String,
    address : String
}, {collection : "user"})

module.exports = mongoose.model("user", UserSchema)