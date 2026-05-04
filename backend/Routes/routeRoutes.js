const express = require("express");
const router = express.Router();
const controller = require("../controllers/routeController");

router.get("/", controller.getRoute);

module.exports = router;

