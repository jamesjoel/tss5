const routes = require("express").Router();

routes.get("/", (req , res)=>{
    res.render("pages/home")
})

module.exports = routes ; 