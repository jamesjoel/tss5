let express = require("express");
// calling the express  constructor
let app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{

    let x = "rohit";
    let user = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name : "amar",
            age : 21,
            city : "mumbai"
        },
        {
            name : "vijay",
            age : 27,
            city : "pune"
        },
        {
            name : "nidhi",
            age : 20,
            city : "indore"
        }
    ]


    let pagedata = { name : x, data : user };
    res.render("home", pagedata)
})

app.get("/about", (req, res)=>{
    res.render("about");
})

const port = 3000;
app.listen(port, ()=>{
    console.log("server running with port ", port)
})