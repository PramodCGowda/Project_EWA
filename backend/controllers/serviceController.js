const express = require("express");
const router = express.Router();

const Service = require("../models/serviceModel");

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// -----------------GET REQUESTS

const getService = async (req, res) => {
  try {
    const allServices = await Service.findAll();
    return res.status(200).json({
      message: "Successfully Fetched !",
      services: allServices,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong !",
      services: null,
    });
  }
};

// -----------------POST REQUESTS

const addService = async (req, res) => {
  try {
    const newService = new Service({ ...req.body });
    const addedService = await newService.save();
    return res.status(200).json({
      message: "Successfully Fetched !",
      services: addedService,
    });
  } catch (err) {
    console.log("Err", err);
    return res.status(500).json({
      message: "Unable to add service at the moment !",
      services: null,
    });
  }
};

module.exports = {
  getService,
  addService,
};
