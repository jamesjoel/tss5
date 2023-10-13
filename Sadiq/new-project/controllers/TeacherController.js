const route = require("express").Router();
const teacher = require("../model/teacher")
const account = require("../model/account")

route.get("/", async (req, res)=>{
    let accountdata = await account.find({});
    let pagedata = { account : accountdata }
    res.render("pages/teacher", pagedata)
})

route.post("/save/:id", async (req, res)=>{
    let account_id = req.params.id;
    let teacher_id = await teacher.create(req.body);
    // let teacherData = await teacher.find({});
    console.log(teacher_id._id);
    await account.updateOne({ _id : account_id }, { $push : { teachers : teacher_id._id }  })
    res.redirect("/account/list/view")
})

route.post("/update/:id", async (req, res)=>{
    let update = req.params.id;
    await teacher.updateMany({ id : update }, { $set : req.body } )
    res.redirect("/account/list/view")
})



route.use("/data", require("./sub-controller/teacher-dataController"));


module.exports = route;