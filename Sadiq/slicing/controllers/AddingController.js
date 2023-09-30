const Route = require("express").Router();

Route.get("/", (req, res)=>{
    res.render("pages/order")
})

module.exports = Route;