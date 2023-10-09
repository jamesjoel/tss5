const Route = require("express").Router();

Route.get("/", (req, res)=>{
    res.render("pages/home")
});

module.exports = Route;