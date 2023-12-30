let route = require('express').Router();
let categoryData = require("../model/Categories");

route.get("/", async(req, res)=>{
    let allCategories = await categoryData.find({});
    // let Count
    // if(allCategories?.subcategory?.length != 0){
    //     Count = allCategories?.subcategory?.length
    // }else{
    //     Count = 0
    // }
    // console.log(Count)
    // allCategories = {...allCategories, count : Count}
    // let pageData = {
        //     allData : allCategories,
        //     count : Count
        // }
        // console.log(pageData)
    
    res.send(allCategories);
})

route.get("/:id", async(req, res)=>{
    let Category = req.params.id;
    let categories = await categoryData.find({ category : Category })
})

route.post("/", async(req, res)=>{
    if(req.headers.authorization){
        let checkCate = req.body.category
        let categories = await categoryData.find({ category : checkCate })
        if(categories?.length === 0){
            await categoryData.create(req.body)
            res.send({success : true})
        }else{
            res.send({success : false})
        }
    }
})

route.post("/subcategory/:id", async(req, res)=>{
    if(req.headers.authorization){
        let Category = req.params.id;
        await categoryData.updateMany({ category : Category }, {$push : {subcategory : req.body}})
        res.send({success : true})
    }
})

route.put("/", async(req, res)=>{

})

route.delete("/", async(req, res)=>{

})

module.exports = route;
