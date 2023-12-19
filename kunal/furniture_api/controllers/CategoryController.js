const routes = require("express").Router()
const Category = require("../Models/Category")

// localhost:8080/api/category

routes.post("/", async(req, res)=>{
    await Category.create(req.body)
    res.send({success : true})
})

routes.get("/", async(req, res)=>{
    let result = await Category.find()
    res.send({success : true, result : result})
})

module.exports = routes;