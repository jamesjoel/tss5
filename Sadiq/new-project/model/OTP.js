require("../config/Database");
let mongoose = require("mongoose");

let OtpSchema = mongoose.Schema({
    otp : Number
}, { collection : "otp" });

let OtpModel = mongoose.model("otp", OtpSchema);

module.exports = OtpModel;