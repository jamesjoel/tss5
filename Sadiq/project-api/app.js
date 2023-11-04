let express = require("express");
let app = express();
let routes = require("./config/AllRoutes");
let cors = require('cors')


app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(routes);

let port = 8080;
app.listen(port, (req, res)=>(
    console.log("server running with port", port)
))

