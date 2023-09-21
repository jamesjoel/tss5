let express = require("express");
let app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("home")
});

app.get("/about", (req, res)=>{

    let table = [
        {
            name: "Arjun",
            age: 25,
            city: "indore"
        },
        {
            name: "bhavesh",
            age: 28,
            city: "goa"
        },
        {
            name: "Akbar",
            age: 20,
            city: "pune"
        },
        {
            name: "Amar",
            age: 29,
            city: "mumbai"
        }
    ]

    let user1 = [
        {
            subject : "Mathametics",
            marks : 95
        },
        {
            subject : "Physics",
            marks : 56
        },
        {
            subject : "Chemistry",
            marks : 87 
        }
    ]

    let pagedata = {data : table, u1 : user1}
    res.render("about", pagedata)
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`server running ${port} port`)
})
