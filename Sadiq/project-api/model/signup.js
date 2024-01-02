require("../config/DataBase");

let mongoose = require("mongoose");
let signupSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    state : String,
    city : String,
    dob : {type : Date, default : Date},
    status : {type : Number, default : "3"},
    address : {type : String, default : ""},
    contact : {type : String, default : ""},
    otp : {type : String, default : ""}
}, { collection : "signup" })

let signupModel = mongoose.model("signup", signupSchema);

module.exports = signupModel;
