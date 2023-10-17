let route = require("express").Router();

route.get("/", (req, res)=>{
    res.render("pages/home")
})

module.exports = route;