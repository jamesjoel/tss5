const express = require("express");
const app = express();

const allRoutes = require("./config/allRoutes")

app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(allRoutes)


const port = process.env.PORT || 3000;

app.listen(port, ()=>{

})