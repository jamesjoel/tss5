const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.post("/save", (req, res)=>{
    console.log(req.body);
})

app.get("/", (req, res)=>{
    res.render("pages/home");
})
app.get("/about", (req, res)=>{
    res.render("pages/about");
})
app.get("/student", (req, res)=>{
    res.render("pages/add_student");
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running With Port ", port);
})