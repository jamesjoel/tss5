const routes = require("express").Router();
const Teacher = require("../models/Teacher");

// localhost:8080/api/tacher
routes.post("/", async(req, res)=>{
    Teacher.create(req.body)
    res.send({ success : true });
})

module.exports = routes;
