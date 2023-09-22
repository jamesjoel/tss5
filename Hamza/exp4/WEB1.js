var express = require("express");
var app = express();

app.use(express.static(__dirname+"/assets"))
app.set("veiw engin")


app.get("/", (req, res)=>{
    res.render(__dirname+"/home.ejs")
})

app.get("/about", (req, res)=>{
    res.render(__dirname+"/about.ejs");
});

app.get("/you", (req, res)=>{
    res.render(__dirname+"/you.ejs")
})

const port = 3000;
app.listen(port, ()=>{
    console.log("server running with port 3000");
});

