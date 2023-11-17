const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({extended : true}));




const port = process.env.Port || 8080;
app.listen(port,()=>{
    console.log("Server Runing with port",port);
})