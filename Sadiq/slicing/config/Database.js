const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/sadiq53");




mongoose.connection.on("connected", ()=>{
    console.log("connected")
})
mongoose.connection.on("Error", (er)=>{
    console.log(er)
})
