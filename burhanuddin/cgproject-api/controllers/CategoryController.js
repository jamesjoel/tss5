const routes = require("express").Router();
const category = require("../models/Category");

routes.post("/", async(req,res)=>{
    // console.log(req.body);
    await category.create(req.body);
    res.send({success:true});
})

routes.get('/', async(req, res)=>{
    let result = await category.find();
    res.send(result);
})

module.exports = routes;
