require("mongoose").connect("mongodb://0.0.0.0:27017/tss5_new")
.then(()=>{
    console.log("CONNECTION SUCCESS")
})
.catch((err)=>{
    console.log("CONNECTION FAIELD")
    
})