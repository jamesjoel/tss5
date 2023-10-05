const route = require("express").Router();
const teacher = require("../model/teacher")

route.get("/", (req, res)=>{
    res.render("pages/teacher")
})

route.post("/save", async (req, res)=>{
    // const id = localStorage.getItem("id");
    // req.body.id = id;
    await teacher.create(req.body)
    res.redirect("/teacher")
})

route.use("/list", require("./sub-controller/teacher-listController"));


route.get("/info/:a", (req, res)=>{
    let x = req.params.a;
})

module.exports = route;