const routes = require("express").Router();
const Student =require("../models/Student");

routes.post("/",async(req,res)=>{
     await Student.create (req.body);
    res.send({success:true});
});

module.exports = routes;