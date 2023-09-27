const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss5_new");
const demoSchema = mongoose.Schema({
    name : String,
    salary : Number,
    city : String
})

const demoModal = mongoose.model("demo", demoSchema);

module.exports = demoModal;