let route = require("express").Router();
let subcategoryData = require("../../model/SubCategories")


route.get("/", async(req, res)=>{
    let allCategories = await subcategoryData.find({});
    res.send(allCategories);
})

route.get("/:id", async(req, res)=>{
    let Category = req.params.id;
    let categories = await subcategoryData.find({ subcategory : Category })
    res.send(categories)
})

route.post("/", async(req, res)=>{
    if(req.headers.authorization){
        await subcategoryData.create(req.body);
        res.send({ success : true })
    }
})

route.put("/", async(req, res)=>{

})

route.delete("/", async(req, res)=>{

})







module.exports = route