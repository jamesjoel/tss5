require("../config/Database");

const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    gmail : String,
    number : Number,
    password : String,
    name : String
});

const accountModel = mongoose.model("account_info", accountSchema);

module.exports = accountModel;