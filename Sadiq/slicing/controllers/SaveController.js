const Route = require("express").Router();

Route.post("/save", async (req, res)=>{
    await ordermodel.create(req.body);
    res.redirect("/adding")
})

module.exports = Route;