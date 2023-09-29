const express = require("express");
const app = express();

const abc = require("express").Router();

console.log(abc);




const XYZ = require("./models/Student");


app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended : true }));




app.get("/view-student", async (req, res)=>{

    let result = await XYZ.find();

    let pagedata = { data : result }
    
    res.render("pages/view-student", pagedata);
})


app.post("/save", async (req, res)=>{
    await XYZ.create(req.body);
    res.redirect("/view-student");
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