let express = require("express");
let app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("pages/home")
})

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
            city : "pune"
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

const port = 3000;
app.listen(port, ()=>{
    console.log(`server is running with ${port} port`)
})