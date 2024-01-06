const express = require("express")
const app = express()
const cors = require("cors")
const AllRoutes = require("./config/AllRoutes")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(AllRoutes)

const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log("Server Is Running")
})