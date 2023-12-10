require("../config/db");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    state: String,
    address: String,
    city: String,
    contact: String
})

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;