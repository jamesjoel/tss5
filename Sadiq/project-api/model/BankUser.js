require("../config/DataBase");

let mongoose = require("mongoose");

let BankUserSchema = mongoose.Schema({
    username : {type : String, default : ""},
    fullname : {type : String, default : ""},
    bank_name : {type : String, default : ""},
    create_date : {type : Date, default : new Date},
    linked_account : {type : String, default : ""},
    transaction : {type : Array, default : []},
    phone_no : {type : String, default : ""},
    balance : {type : String, default : ""},
    upi_id : {type : String, default : ""},
    email : {type : String, default : ""},
    password : {type : String, default : ""},
    mpin : {type : String, default : ""},
    account_type : {type : String, default : ""},
    account_no : {type : String, default : ""},
    dob : {type : String, default : ""},
    gender : {type : String, default : ""},    
    mother_name : {type : String, default : ""},
    father_name : {type : String, default : ""},
    nationality : {type : String, default : ""},
    monthly_income : {type : String, default : ""},
    address : {type : String, default : ""},
    secondary_address : {type : String, default : ""},
    city : {type : String, default : ""},
    state : {type : String, default : ""},
    country : {type : String, default : ""}
}, { collection : "bankuser" });

module.exports = mongoose.model("bankuser", BankUserSchema);