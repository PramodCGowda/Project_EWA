const mongoose = require("mongoose");

const ServiceRequestSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  serviceID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
  requestDate: {
    type: Date,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});

const request = mongoose.model("ServiceRequest", ServiceRequestSchema);

module.exports = { request };
