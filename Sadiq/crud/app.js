let express = require("express");
let app = express();
let routes = require("./config/allRoutes");

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended : true }))
app.use(routes);

let port = 3000;
app.listen(port, ()=>{
    console.log("server running with port", port)
})
