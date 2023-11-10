const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/allRoutes");

app.use(express.json());
app.use(express.urlencoded( { extended : true}));
app.use(cors());
app.use(routes)



const port = process.env.PORT || 9999
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})