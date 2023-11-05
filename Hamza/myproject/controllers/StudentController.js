const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.render("pages/student-list")
})


routes.get("/add", (req, res)=>{
    res.render("pages/student-add")
})


let result = await student.find();
let student = { list : result }
res.render("pages/student-list", student);


routes.post("/save", async (req, res)=>{
await student.create(req.body);
res.redirect("/list");
})

routes.get("/delete/:a", async(req, res)=>{
let x = req.params.a;

await student.deleteMany({ _id : x});
res.redirect("/student/list")
})

routes.get("/view/:a", async(req, res)=>{
let x = req.params.a;
let result = await student.find({ _id : x });
let pagedata = { data : result[0] };
res.render("pages/student-info", pagedata)
})

routes.get("/edit/:id", async(req, res)=>{
let id = req.params.id;
let result = await student.find({ _id : id });
let pagedata = { data : result[0] }
res.render("pages/student-edit", pagedata);
})

routes.post("/update/:id", async(req, res)=>{
let id = req.params.id;
await student.updateMany({_id : id }, req.body);
res.redirect("/student/list")
})






routes.get("/info/:a/:b", (req, res)=>{
// console.log(req.params);
let x = req.params.a;
let y = req.params.b;
})


module.exports = routes;

