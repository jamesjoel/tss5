
const routes = require("express").Router();
const user = require("../models/User")

routes.post("/signup", async(req, res)=>{
    await user.create(req.body);
    req.send({success : true})
})

module.exports = routes;