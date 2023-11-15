const mongoose = require("mongoose");

const ServiceCategorySchema = new Schema({
  categoryName: String,
});

const category = mongoose.model("User", ServiceCategorySchema);

module.exports = { category };
