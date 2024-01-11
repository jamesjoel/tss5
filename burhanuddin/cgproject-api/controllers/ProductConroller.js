const routes = require('express').Router();
const product = require('../models/xProduct');



routes.post('/', async(req , res)=>{
    await product.create(req.body);
    res.send({sucess : true})
} )

routes.get('/', async(req , res)=>{
    let result = await product.find();
    res.send(result);
})

module.exports = routes;