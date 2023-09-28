const Route = require("express").Router();

Route.post("/store", async (req, res)=>{
    await employemodel.create(req.body);
    res.redirect("/about")
})

module.exports = Route;