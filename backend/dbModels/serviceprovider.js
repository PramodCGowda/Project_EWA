const mongoose = require("mongoose");

const ServiceProviderSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  serviceCategoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory",
  },
  rating: {
    type: Number,
    require: false,
    default: 2,
  },
  description: {
    type: String,
    require: true,
  },
});

const provider = mongoose.model("User", ServiceProviderSchema);

module.exports = { provider };
