const mongoose = require("mongoose");

const ProviderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  service: {
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
    required: false,
  },
  rating: {
    type: Number,
    require: false,
    default: 2,
  },
  reviews: {
    type: String,
    require: false,
  },
  aboutme: {
    type: String,
    require: true,
  },
});

const Provider = mongoose.model("Provider", ProviderSchema);

module.exports = { Provider };
