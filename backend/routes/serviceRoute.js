const express = require("express");
const serviceController = require("../controllers/serviceController");

const router = express.Router();

router.get("/", serviceController.getService);

router.post("/add", serviceController.addService);

module.exports = router;
