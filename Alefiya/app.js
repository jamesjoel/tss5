let express = require("express");
let app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine","ejs")


app.get("/" , (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

const port= 3000;
app.listen(port, ()=>{
    console.log("Server is running successfully",port)
})
