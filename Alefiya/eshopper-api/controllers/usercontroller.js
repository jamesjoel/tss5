const routes = require("express").Router();
const user = require("../models/user");
const sha1 = require("sha1");

routes.post("/signup", async (req, res) => {
    delete req.body.repassword;
    req.body.password = sha1(req.body.password);


    await user.create(req.body);
    res.send({ succes: true });
})

module.exports = routes;