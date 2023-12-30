require("../config/DataBase");

let mongoose = require("mongoose");
let frndReqSchema = mongoose.Schema({
    senderid : String,
    receiverid : String,
}, { collection : "frndrequest" })


module.exports = mongoose.model("frndrequest", frndReqSchema);
