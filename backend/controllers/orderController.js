const express = require("express");
const router = express.Router();

const Provider = require("../models/providerModel");
const User = require("../models/userModel");
const Service = require("../models/serviceModel");
const Order = require("../models/orderModel");

// -----------------GET REQUESTS

const getOrder = async (req, res) => {
  try {
    const allOrders = await Order.findAll({
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
        {
          model: Provider,
          as: "provider",
          attributes: ["hourly_rate", "image", "rating", "aboutme"],
          include: [
            {
              model: User,
              as: "user",
              attributes: ["name", "image"],
            },
          ],
        },
      ],
    });
    return res.status(200).json({
      message: "Successfully Fetched !",
      orders: allOrders,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong !",
      orders: null,
    });
  }
};

// -----------------POST REQUESTS

const addOrder = async (req, res) => {
  try {
    console.log("=====>", req.body);
    const { user, service, provider, address, details, ...orderData } =
      req.body;
    orderData.userId = user;
    orderData.serviceId = service;
    orderData.providerId = provider;
    orderData.street = address.street;
    orderData.city = address.city;
    orderData.state = address.state;
    orderData.zipcode = address.zipcode;
    orderData.demand = details.demand;
    orderData.vehicleNeeded = details.vehicleNeeded;
    orderData.aptDate = details.aptDate;
    orderData.aptTime = details.aptTime;
    const newOrder = new Order(orderData);
    const addedOrder = await newOrder.save();
    return res.status(200).json({
      message: "Successfully Fetched !",
      order: addedOrder,
    });
  } catch (err) {
    console.log("Err", err);
    return res.status(500).json({
      message: "Unable to add order at the moment !",
      order: null,
    });
  }
};

module.exports = {
  getOrder,
  addOrder,
};
