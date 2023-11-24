require("../config/db");
let mongoose = require("mongoose")

const UserSchema = mongoose.Schema( {
    name: String,
    gender: String,
    number:String,
    email:String,   
    password:String,
    repassword: String,
    address:String,
    state:String,
    city:String
})

const user = mongoose.model("user", UserSchema)
module.exports = user;