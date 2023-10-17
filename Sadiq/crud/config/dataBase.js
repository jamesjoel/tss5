let mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/crud")

mongoose.connection.on("connected", ()=>{
    console.log("connected")
})

mongoose.connection.on("erros", (er)=>{
    console.log(er)
})


module.exports = mongoose;