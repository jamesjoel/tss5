const routes = require("express").Router()
const Product = require("../Models/Product")

routes.get("/", async (req, res)=>{
    let result = await Product.find()
    res.send({success : true, result : result})
})

routes.get("/:id", async (req, res)=>{
    let result = await Product.find({_id : req.params.id})
    res.send({success : true, result : result[0]})
})

routes.post("/", async (req, res)=>{
    if(req.headers.authorization){
        let result = await Product.create(req.body)
    res.send({success : true, result : result})
    }else{
        res.send({success : false})
    }
    
})

routes.put("/:id", async (req, res)=>{
    let result = await Product.updateMany({_id : req.params.id}, req.body)
    res.send({success : true})
})

routes.delete("/:id", async (req, res)=>{
    let result = await Product.deleteMany({_id : req.params.id})
    res.send({success : true})
})

module.exports = routes