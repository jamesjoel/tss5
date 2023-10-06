const Route = require("express").Router();

Route.get("/", (req, res)=>{
    res.render("pages/about")
})


module.exports = Route;