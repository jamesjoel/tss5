const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.render("pages/about");
});


module.exports = routes;