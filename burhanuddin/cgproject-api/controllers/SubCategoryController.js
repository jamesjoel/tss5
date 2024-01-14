const routes = require('express').Router();
const subcategory = require('../models/SubCategory');

routes.post("/", async(req,res)=>{
    // console.log(req.body);
    await subcategory.create(req.body);
    res.send({success:true});
})

routes.get('/', async (req , res)=>{
    let result = await subcategory.find();
    // console.log(result);
    res.send(result);
}
)

routes.get('/subcatelist/:cate', async(req , res)=>{
    let cate = req.params.cate;
    let result = await subcategory.find({Category_name : cate })
    res.send(result)
})


// routes.get('/:id', async(req, res)=>{
//     let result = await subcategory.find()
// })
module.exports = routes;