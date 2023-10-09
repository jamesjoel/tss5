const route = require("express").Router();
const account = require("../../model/account");
const teacher = require("../../model/teacher");


route.get("/:id", async (req, res)=>{
    let id = req.params.id;
    let accountdata = await account.find({ _id : id})
    let pagedata = { account : accountdata[0] }
    res.render("pages/account-authentication", pagedata)
})

route.post("/signup", async (req, res)=>{
    let accountdata = await account.find({})
    let teacherdata = await teacher.find({}) 

    //Authentication Code Starts -----
    const gmail = req.body.gmail;
    const password = req.body.password;
    let beta = await account.find({ gmail : gmail });
    if( beta.length != 0 ){
        if( beta[0].password == password.trim() ){
            let token = beta[0]._id;
            res.status(200).render("pages/account-login", { status : 200, success : true, errType : 0, token : token, account : accountdata[0], teacher : teacherdata[0] })
        }else{
            res.status(402).render("pages/home", { status : 402, success : false, errType : 2 });
        }
    }else{
        res.status(403).render("pages/home", { status : 403, success : false, errType : 1 });
    }
})
    //Authentication Code Ends -----


module.exports = route;