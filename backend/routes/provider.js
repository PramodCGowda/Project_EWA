const express = require("express");
const router = express.Router();

const { Provider } = require("../dbModels/provider");

// -----------------GET REQUESTS

router.get("/", async (req, res) => {
  try {
    const allProviders = await Provider.find();
    return res.status(200).json({
      message: "Successfully Fetched !",
      providers: allProviders,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong !",
      providers: null,
    });
  }
});

// -----------------POST REQUESTS

router.post("/add", async (req, res) => {
  try {
    const newProvider = new Provider({ ...req.body });
    const addedProvider = await newProvider.save();
    return res.status(200).json({
      message: "Successfully Fetched !",
      providers: addedProvider,
    });
  } catch (err) {
    console.log("Err", err);
    return res.status(500).json({
      message: "Unable to add service at the moment !",
      providers: null,
    });
  }
});

module.exports = router;
