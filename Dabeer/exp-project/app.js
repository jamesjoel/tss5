const express= require("express");
const app= express();

const mongoose= require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss5");

const mySchema= mongoose.Schema({
    fullname: String,
    email: String,
    contact:String,
    fee:Number,
    gender:String,
    address:String,
    city:String,
    hobby: []
});

const myModel =  mongoose.model("student",mySchema);

const demoSchema= mongoose.Schema({
    name:String,
    salary:Number,
    city:String
})

const demoModel= mongoose.model("demo",demoSchema);

app.use(express.static(__dirname+"/assets"));

app.set("view engine", "ejs");

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.post("/demo",(req,res)=> {
    demoModel.create(req.body);
    res.redirect("/");
})


app.post("/save",(req,res)=>{ 
    myModel.create(req.body);
    res.redirect("/");
})

app.get("/",(req,res)=>{ 
    res.render("pages/home");
})

app.get("/about",(req,res)=>{ 
    res.render("pages/about");
})

app.get("/services",(req,res)=>{ 
    res.render("pages/services");
})

app.get("/students",(req,res)=>{ 
    res.render("pages/students");
})

const port=process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("surver is runing", port);
})