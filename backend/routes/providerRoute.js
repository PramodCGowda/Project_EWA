const express = require("express");
const providerController = require("../controllers/providerController");

const router = express.Router();

router.get("/", providerController.getProvider);

router.post("/add", providerController.addProvider);

module.exports = router;
