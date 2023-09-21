let express = require("express");
let app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("pages/home")
})

app.get("/about", (req, res)=>{
    res.render("pages/about")
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`server is running with ${port} port`)
})