const bodyParser = require("body-parser");
let express = require("express");
let app = express();
// {
//     engine = require("express-handlebars")
// }
// bodyparser = require("body-parser")


//create a path 
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
    console.log(req.body)
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
            city : "indore",
            course :{
                        subject : "Mathametics",
                        marks : 80
                    }
        },
        {
            name : "arjun",
            age : 36,
            city : "mumbai",
            course :{
                subject : "Physics",
                marks : 80
            }
        },
        {
            name : "sourav",
            age : 54,
            city : "pune",
            course :{
                subject : "Biology",
                marks : 80
            }
        },
        {
            name : "piyush",
            age : 75,
            city : "surat",
            course :{
                subject : "Chemistry",
                marks : 80
            }
        }
    ]

    let pagedata = {data1 : table}
    res.render("pages/about", pagedata)
})


//server of port = 3000
const port = 3000;
app.listen(port, ()=>{
    // console.log(`server is running with ${port} port`)
    
    console.log("server running ", port);
})