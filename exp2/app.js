let express = require("express");
let app = express();



app.use(express.static(__dirname+"/assets"));

// localhost:3000
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html");
});

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
})

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html")
})

app.get("/terms", (req, res)=>{
    res.sendFile(__dirname+"/terms.html")
})


app.listen(3000, ()=>{
    console.log("server running");
})