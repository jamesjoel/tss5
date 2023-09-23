const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine","ejs");

app.get("/", (req, res)=>{
    res.render("home");
})

app.get("/about", (res, req)=>{
    res.render("about");
})

const port= 3000;
app.listen(port, ()=>{
    console.log("server running with port" + port)
})
