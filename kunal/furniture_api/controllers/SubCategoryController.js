const routes = require("express").Router()
const SubCate = require("../Models/SubCategory")

// 8080/api/sub-category

routes.get("/", async(req,res)=>{
  let result =  await SubCate.find()
    res.send({success : true, result : result})
})

routes.get("/:id", async(req,res)=>{
    let result = await SubCate.find({_id : req.params.id})
    res.send({success : true, result : result[0]})
  })

  routes.post("/", async(req,res)=>{
    let result =  await SubCate.create(req.body)
      res.send({success : true, result : result})
  })

  routes.delete("/:id", async(req,res)=>{
    let result =  await SubCate.deleteMany({_id : req.params.id})
      res.send({success : true, result : result})
  })

  routes.put("/", async(req,res)=>{
    let result =  await SubCate.updateMany({_id : req.params.id}, req.body)
      res.send({success : true, result : result})
  })

  routes.get("/product/:id", async(req, res)=>{
    let result = await SubCate.find({category : req.params.id})
    res.send({success : true, result : result})
    
  })

  module.exports = routes
