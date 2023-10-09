const route = require("express").Router();

route.get("/", (req, res)=>{
    res.render("");
})

route.get("/guessgame", (req, res)=>{
    res.render("pages/guessGame");
})

module.exports = route;