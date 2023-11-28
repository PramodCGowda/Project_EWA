const mongoose = require("mongoose");

const ServiceRequestSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  serviceID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
  providerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
  },
  generalDetails: {
    type: Date,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  task: {
    type: String,
    require: true,
  },
});

const request = mongoose.model("ServiceRequest", ServiceRequestSchema);

module.exports = { request };
