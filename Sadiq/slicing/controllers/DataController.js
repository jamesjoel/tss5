const Route = require("express").Router();
let ordermodel = require("../models/order");

Route.get("/", async (req, res)=>{
    const orders = await ordermodel.find({});
    let pagedata = {data : orders}
    res.render("pages/order_data", pagedata)
})

module.exports = Route;