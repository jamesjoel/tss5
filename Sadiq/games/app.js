let express = require("express");
let app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"))

app.get("/", (req, res)=>{
    res.render("guessNum")
});

let port = 3000;
app.listen(port, ()=>{
    console.log(`server running with port &{port}`)
});