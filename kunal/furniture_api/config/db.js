const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/tss5").then(()=>{
    console.log("mongoDB Connected")
}).catch((err)=>{
    console.log("Errrrr------>", err)
})