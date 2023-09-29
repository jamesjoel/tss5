const Route = require("express").Router();

Route.get("/data", async (req, res)=>{
    const orders = await ordermodel.find();
    let pagedata = {data : orders}
    res.render("pages/order_data", pagedata)
})

module.exports = Route;