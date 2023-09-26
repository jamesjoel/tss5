const bodyParser = require("body-parser");
let express = require("express");
let app = express();
let mongoose = require("mongoose")


//connect to mongoose
mongoose.connect("mongodb://0.0.0.0:27017/sadiq");

app.use(express.static(__dirname+"/assets"));

//use to run ejs files
app.set("view engine", "ejs")

//use for taking data from user
app.use(express.json());
app.use(express.urlencoded({extended : true}));







//route of home
app.get("/", (req, res)=>{
    res.render("pages/home")
})

app.post("/save", (req, res)=>{
    ordermodel.create(req.body);
    // res.redirect("/data")
})

//route for adding new student
app.get("/adding", (req, res)=>{
    res.render("pages/student")
})

app.get("/data", (req, res)=>{

    const orderschema = mongoose.Schema({
        fullname : String,
        contact : Number,
        email : String,
        address : String
    });
    
    const ordermodel = mongoose.model("orders", orderschema);
    
    let pagedata = {data : orderschema}
    console.log(pagedata)
    res.render("pages/order_data")
})


//route of about
app.get("/about", (req, res)=>{
    let table = require("table")
    let pagedata = {data1 : table}
    res.render("pages/about", pagedata)
})


//server of port = 3000
const port = 3000;
app.listen(port, ()=>{
    // console.log(`server is running with ${port} port`)
    
    console.log("server running ", port);
})