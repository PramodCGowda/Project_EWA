const { Double } = require("mongodb");
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  serviceID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
  providerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
  },
  task: {
    type: String,
  },
  details: {
    demand: String,
    vehicleNeeded: String,
    aptDate: Date,
    aptTime: String,
  },
  supportFee: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  total: {
    type: Number,
  },
});

const Order = mongoose.model("order", OrderSchema);

module.exports = { Order };
