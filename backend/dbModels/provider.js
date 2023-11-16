const mongoose = require("mongoose");

const ProviderSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  serviceID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
  hourly_rate: {
    type: String,
    required: true,
    default: "100",
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    require: false,
    default: 2,
  },
  reviews: {
    type: String,
    require: true,
  },
  aboutme: {
    type: String,
    require: true,
  },
});

const Provider = mongoose.model("Provider", ProviderSchema);

module.exports = { Provider };
