// const bodyParser = require("body-parser");
let express = require("express");
let app = express();
let table = require("./models/table")
let ordermodel = require("./models/order") 








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

//data coming from [MAKE ORDERS]
app.post("/save", async (req, res)=>{
    await ordermodel.create(req.body);
    res.redirect("/adding")
})

//route for adding new student
app.get("/adding", (req, res)=>{
    res.render("pages/student")
})

//rout of data page
app.get("/data", async (req, res)=>{
    const orders = await ordermodel.find();
    let pagedata = {data : orders}
    res.render("pages/order_data", pagedata)
})


//route of about
app.get("/about", (req, res)=>{
    let pagedata = {data1 : table}
    res.render("pages/about", pagedata)
})












//server of port = 3000
const port = 3000;
app.listen(port, ()=>{
    // console.log(`server is running with ${port} port`)
    
    console.log("server running ", port);
})