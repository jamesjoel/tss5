let routes = require("express").Router();
let user = require("../models/user");
let sha1 = require("sha1");
routes.post("/", async (req, res) => {
    let e = req.body.email;
    let p = req.body.password;


    let result = await user.find({ email: e });
    console.log(req.body);
    if (result.length >= 1) {

        if (result[0].password == sha1(p)) {
            console.log("yes-----");
        }
        else {
            res.send({ success: false, type: 2 });
        }
    }
    else {
        res.send({ success: false, type: 1 });
    }


})

module.exports = routes;