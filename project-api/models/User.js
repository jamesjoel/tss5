require("../config/db");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
            name : String,
            email : String,
            password : String,
           
            gender : String,
            address : String,
            state : String,
            city : String,
            contact : String
})

const User = mongoose.model("user", UserSchema);

module.exports = User;