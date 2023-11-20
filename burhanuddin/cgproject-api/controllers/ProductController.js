const routes = require("express").Router();
const Product = require("../models/product");

routes.get("/", async(req, res)=>{
    let result = await Product.find();

})

module.exports = routes;
