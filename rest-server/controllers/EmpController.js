const routes = require("express").Router();
const Emp = require("../models/Employee");

routes.get("/", async(req, res)=>{ // send all Data
    let result = await Emp.find();
    res.send(result);
})
routes.get("/:id", async(req, res)=>{ // send only id data
    let id = req.params.id;
    let result = await Emp.find({_id : id});
    res.send(result[0]);
})
routes.post("/", async(req, res)=>{ // insert data
    let result = await Emp.create(req.body);
    res.send(result);
})
routes.delete("/:id", async(req, res)=>{ // delete data by id
    let id = req.params.id;
    let result = await Emp.deleteMany({_id : id});
    res.send(result);
}) 
routes.put("/:id", async(req, res)=>{ // update data by id
    let id = req.params.id;
    let result = await Emp.updateMany({_id : id}, req.body);
    res.send(result);
})

// http://localhost:8080/api/employee

module.exports = routes;