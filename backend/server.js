const express = require("express");
const cors = require("cors");
const routeRoutes = require("./routes/routeRoutes");

const app = express();

app.use(cors());
app.use("/route", routeRoutes);

app.listen(5000, () => console.log("Server running"));

