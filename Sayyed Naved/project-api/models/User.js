require("../config/Database");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
        name : String,
        email : String,
        password : String,
        repassword : String,
        gender : String,
        address : String,
        state : String,
        city : String,
        contact : String
})

const user = mongoose.model("user",userSchema);

module.exports = user;