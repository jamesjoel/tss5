let routes = require("express").Router();
let User = require("../models/User");
let sha1 = require("sha1")

routes.post("/", async(req, res)=>{
    let e = req.body.email;
    let p = req.body.password;

    /*
            e = "rohit@gmail.com"
            e = "hh@gg.com"
    */
    
    let result = await User.find({ email : e });
    if(result.length >= 1)
    {
        if(result[0].password == sha1(p))
        {
            console.log("YES________________");
        }
        else{
            res.send({ success : false, type : 2 })
        }
    }
    else{
        res.send({ success : false, type : 1 })
    }
    
})

module.exports = routes;

/*

    let result = await User.find({ city : "indore" });

*/