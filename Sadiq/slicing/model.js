//create mongoose schemea
const orderschema = mongoose.Schema({
    fullname : String,
    contact : Number,
    email : String,
    address : String
});

//make MODEL
const ordermodel = mongoose.model("orders", orderschema);


module.exports = orderschema;