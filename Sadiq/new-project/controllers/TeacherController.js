const route = require("express").Router();
const teacher = require("../model/teacher")
const account = require("../model/account")

route.get("/", (req, res)=>{
    res.render("pages/teacher")
})

route.post("/save", async (req, res)=>{
    await teacher.create(req.body)
    res.redirect("/account/list/view")
})

route.post("/update/:id", async (req, res)=>{
    let update = req.params.id;
    await teacher.updateMany({ id : update }, { $set : req.body } )
    res.redirect("/account/list/view")
})



route.use("/data", require("./sub-controller/teacher-dataController"));


module.exports = route;