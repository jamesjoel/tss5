const routes = require("express").Router();
const Teacher = require("../models/Teacher");

routes.get("/", async(req, res)=>{
    let result = await Teacher.find();
    res.send(result);
})

module.exports = routes;
