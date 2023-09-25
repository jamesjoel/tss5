let express = require("express");
let app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine","ejs")


app.get("/" , (req, res)=>{
    res.render("index")
})
app.get("/about" , (req, res)=>{
    res.render("about")
})

const port= 3000;
app.listen(port, ()=>{
    console.log(`Server is running successfully ${port}`)
})
