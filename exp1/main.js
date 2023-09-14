var express = require("express");
var app = express();

// http://localhost:3000/

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html")
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
});

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html")
})

// .listen() function is used for create a virtual server
app.listen(3000, ()=>{
    console.log("server running with port 3000");
});

