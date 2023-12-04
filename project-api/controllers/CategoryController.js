const routes = require("express").Router();
const Category = require("../models/Category");

routes.post("/", async(req, res)=>{
    await Category.create(req.body)
    res.send({success : true });
})
routes.get("/", async(req, res)=>{
    let result = await Category.find();
    res.send({success : true, result : result });
})

module.exports = routes;