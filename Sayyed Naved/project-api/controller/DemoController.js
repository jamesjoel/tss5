const routes = require('express').Router();
const path = require("path");
routes.post("/",(req,res)=>{
    let file = req.files.photo;
    console.log(file); 
    file.mv(path.resolve()+"/assets/user-image/"+file.name);
})

module.exports = routes;