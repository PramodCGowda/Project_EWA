const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
      default: "100",
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      returired: true,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", ServiceSchema);

module.exports = { Service };
