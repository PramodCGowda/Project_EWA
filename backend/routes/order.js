const express = require("express");
const router = express.Router();

const { Order } = require("../dbModels/order");

// -----------------GET REQUESTS

router.get("/", async (req, res) => {
  try {
    const allOrders = await Order.find();
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
});

// -----------------POST REQUESTS

router.post("/", async (req, res) => {
  try {
    const newOrder = new Order({ ...req.body });
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
});

module.exports = router;
