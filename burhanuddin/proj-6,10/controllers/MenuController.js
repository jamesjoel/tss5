const routes = require("express").Router();
const menu = require("../models/menu")


routes.get("/", async(req , res)=>{
    let result = await menu.find();
    let pagedata = { data : result};
    // console.log(pagedata)
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

routes.get("/edit/:id", async(req , res)=>{
    let id = req.params.id; 
    let results = await menu.find({_id: id});
    let pagedata = {data : results[0]};
    res.render("pages/menu-edit", pagedata);
})

routes.post("/update/:id", async (req , res)=>{
    let id = req.params.id;
    await menu.updateMany({_id : id}, req.body);
    res.redirect("/menu");
   })

module.exports = routes;
