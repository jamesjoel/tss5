var express = require("express");
var app = express();

app.use(express.static(__dirname+"/assets"))


app.listen(3000, ()=>{
    console.log("server running");
});

app.get("/about", (x , y)=>{
    y.sendFile(__dirname+"/about.html");
})


app.get("/home", (x , y)=>{
    y.sendFile(__dirname+"/home.html");
})

app.get("/", (x , y)=>{
    y.sendFile(__dirname+"/home.html");
})

app.get("/contact", (x , y)=>{
    y.sendFile(__dirname+"/contact.html");
})