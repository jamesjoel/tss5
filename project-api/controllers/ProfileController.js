const routes = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const key = require("../config/token_key");

routes.get("/", async(req, res)=>{
    if(req.headers.authorization)
    {
        let token = req.headers.authorization;
        let obj = jwt.decode(token, key);
        let id = obj.id;
        
        let result = await User.find({_id : id });
        let info = {
            name : result[0].name,
            email : result[0].email,
            gender : result[0].gender,
            address : result[0].address,
            state : result[0].state,
            city : result[0].city,
            contact : result[0].contact
        }
        res.send({ success : true, info : info});
    }
    else{
        res.send({ success : false });
    }
    //    let result = await User.find({_id : }); 
})

module.exports = routes;