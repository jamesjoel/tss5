const Route = require("express").Router();

Route.get("/adding", (req, res)=>{
    res.render("pages/order")
})

Route.post("/save", async (req, res)=>{
    await ordermodel.create(req.body);
    res.redirect("/adding")
})
module.exports = Route;