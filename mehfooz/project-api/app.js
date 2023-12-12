const express = require("express");
const app = express();
const cors = require("cors")
const AllRoures = require("./routes/AllRoutesnew")


app.use(express.json());
app.use(express.urlencoded({extended:true}));
// const routes = require("../tssproject/src/routes/AllRoutesnew");
app.use(cors());
app.use(AllRoures)

const port = process.env.port||8080;
app.listen(port,()=>{
  console.log("server runing with -----")
})
