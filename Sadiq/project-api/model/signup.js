require("../config/DataBase");

let mongoose = require("mongoose");
let signupSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    password : String,
    dob : Date,
    state : String,
    city : String,
    status : {type : Number, default : "3"},
    address : {type : String, default : ""},
    contact : {type : String, default : ""},
    otp : {type : String, default : ""}
}, { collection : "signup" })

let signupModel = mongoose.model("signup", signupSchema);

module.exports = signupModel;
