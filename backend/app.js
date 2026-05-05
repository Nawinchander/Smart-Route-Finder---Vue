const express = require("express");
const cors = require("cors");
const routeRoutes = require("./routes/routeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/route", routeRoutes);

module.exports = app;