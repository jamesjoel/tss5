const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/Allroutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server running", port);
})