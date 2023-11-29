const express = require("express");
const router = express.Router();

const Provider = require("../models/providerModel");
const User = require("../models/userModel");
const Service = require("../models/serviceModel");

// -----------------GET REQUESTS

const getProvider = async (req, res) => {
  try {
    const allProviders = await Provider.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "image"],
        },
        {
          model: Service,
          as: "service",
          attributes: ["name", "image", "price"],
        },
      ],
    });
    res.status(200).json({
      message: "Successfully Fetched !",
      providers: allProviders,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong !",
      providers: null,
    });
  }
};

// router.get("/:id", async (req, res) => {
//   try {
//     const serviceId = decodeURIComponent(req.params.id);
//     const allProviders = await Provider.findById(serviceId)
//       .populate("user", ["name", "image"])
//       .populate("service", ["name", "image", "price"]);
//     console.log(allProviders);
//     return res.status(200).json({
//       message: "Successfully Fetched !",
//       providers: allProviders,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       message: "Something Went Wrong !",
//       providers: null,
//     });
//   }
// });

// -----------------POST REQUESTS

const addProvider = async (req, res) => {
  try {
    const { user, service, ...providerData } = req.body;
    providerData.userId = user;
    providerData.serviceId = service;
    const newProvider = new Provider(providerData);
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
};

module.exports = {
  getProvider,
  addProvider,
};
