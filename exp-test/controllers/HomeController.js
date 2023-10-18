const routes = require("express").Router();

// localhost:3000
routes.get("/", (req, res)=>{
    res.render("pages/home");
})

module.exports = routes;