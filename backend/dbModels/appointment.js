const mongoose = require("mongoose");

const ServiceRequestSchema = new mongoose.Schema({
  requestID: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceRequest" },
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
});

const request = mongoose.model("User", ServiceRequestSchema);

module.exports = { request };
