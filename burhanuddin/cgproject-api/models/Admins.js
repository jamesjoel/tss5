require("../config/db");
let mongoose = require("mongoose");
let AdminSchema = mongoose.Schema({
    username : String,
    password : String
});

const AdminModel = mongoose.model("admin", AdminSchema);
module.exports = AdminModel