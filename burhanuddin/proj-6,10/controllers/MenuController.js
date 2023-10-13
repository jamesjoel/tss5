const routes = require("express").Router();
const menu = require("../models/menu")


routes.get("/", async(req , res)=>{
    let result = await menu.find();
    let pagedata = { data : result};
    res.render("pages/menu-list", pagedata);
})

routes.get("/add", (req , res)=>{
    res.render("pages/menu-add");
})

routes.post("/save", async (req , res)=>{
 await menu.create(req.body);
 res.redirect("/menu");
})

routes.get("/delete/:id", async(req , res)=>{
    let id = req.params.id;
    await menu.deleteMany({_id: id});
    res.redirect("/menu");
})

module.exports = routes;
