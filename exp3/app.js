let express = require("express");
let app = express();


app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");



app.get("/", (req, res)=>{
    let a = "indore";

    let obj = { x : a, y : "Amar", z : "The Stepping Stone", totalMail : 41}

    res.render("home", obj);
})

app.get("/about", (req, res)=>{
    res.render("about");
})


// http://localhost:3000
app.listen(3000, ()=>{
    console.log("Server Running");
})