const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("pages/home");
})
app.get("/about", (req, res)=>{
    res.render("pages/about");
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running With Port ", port);
})