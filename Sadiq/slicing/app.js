let express = require("express");
let app = express();

//
app.post("/adding", (req, res)=>{
    req.body
})

//create a path 
app.use(express.static(__dirname+"/assets"));

//use to run ejs files
app.set("view engine", "ejs")

//use for taking data from user
app.use(express.json());
app.use(express.urlencoded({extend : true}));

//route of home
app.get("/", (req, res)=>{
    res.render("pages/home")
})

//route for adding new student
app.get("/adding", (req, res)=>{
    res.render("pages/student")
})


//route of about
app.get("/about", (req, res)=>{

    let table = [
        {
            name : "rahul",
            age : 46,
            city : "indore"
        },
        {
            name : "arjun",
            age : 36,
            city : "mumbai"
        },
        {
            name : "sourav",
            age : 54,
            city : "pune",
        },
        {
            name : "piyush",
            age : 75,
            city : "surat"
        }
    ]

    let course = [
        {
            subject : "Mathametics",
            marks : 80
        },
        {
            subject : "Chemistry",
            marks : 78
        },
        {
            subject : "Biology",
            marks : 59
        },
        {
            subject : "Physics",
            marks : 70
        },
    ]

    let pagedata = {data1 : table, data2 : course}
    res.render("pages/about", pagedata)
})


//server of port = 3000
const port = 3000;
app.listen(port, ()=>{
    // console.log(`server is running with ${port} port`)
    
    console.log("server running ", port);
})