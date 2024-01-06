require ("../config/db");

const mongoose = require ("mongoose");

const UserSchema = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    address : String,
    state : String,
    city : String,
    gender : String,
    contact : String
})
const UserModel = mongoose.model ("User",UserSchema);
module.exports = UserModel;