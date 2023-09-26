const mongoose = require ("mongoose")

//connect to mongoose
mongoose.connect("mongodb://0.0.0.0:27017/sadiq");



//create mongoose schemea
const orderschema = mongoose.Schema({
    fullname : String,
    contact : Number,
    email : String,
    address : String
});

//make MODEL
const ordermodel = mongoose.model("orders", orderschema);


module.exports = ordermodel;