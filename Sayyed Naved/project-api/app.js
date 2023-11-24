const express = require("express");
const app = express();
const cors = require("cors");
let routes = require('./routes/AllRoutes')


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(routes);



const port = process.env.Port || 8080;
app.listen(port,()=>{
    console.log("Server Runing with port",port);
})