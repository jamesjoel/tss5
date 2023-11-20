const routes = require("express").Router();
const city = require("../models/city")



routes.get('/state', async(req, res)=>{
    let result= await city.distinct("state");
    res.send(result);

});

routes.get('/:a', async(req,res)=>{
    let x = req.params.a;
    let result = await city.find({state: x});
    res.send(result);
})

module.exports = routes;
