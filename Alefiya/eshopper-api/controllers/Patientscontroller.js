const routes = require("express").Router();
const Patients = require("../models/Patients");


routes.get("/", async (req, res) => {
    let result = await Patients.find();
    res.send(result);
})

module.exports = routes;