const Route = require("express").Router();

Route.get("/", (req, res)=>{
    res.render("pages/about")
})

Route.post("/store", async (req, res)=>{
    await employemodel.create(req.body);
    res.redirect("/about")
})

module.exports = Route;