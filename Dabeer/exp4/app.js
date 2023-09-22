let express= require("express");
let app=express();
app.use(express.static(__dirname+"/assets"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    let x ="Rohit";
    let user=[
        {name:"vijay",
        age: 30,
        city: "mumbai"}
    
        {name:"amar",
        age: 25,
        city: "pune"}

        {name:"naved",
        age: 27,
        city: "indore"}

        {name:"nidhi",
        age: 20,
        city: "banglor"}]
    let pagedata={name:x,data:user};
    res.render("home",pagedata);
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});

const port =3000;

app.listen(port,()=>{
    console.log("surver runing",port);
})