let route = require("express").Router();
let product = require("../model/product")


route.get("/category", async (req, res)=>{
 let productCategory = await product.distinct("category");
 res.send(productCategory);
})

route.get("/product/:category", async(req, res)=>{
    let Category = req.params.category;
    let productData = await product.find({ category : Category })
    res.send(productData)
})

module.exports = route;