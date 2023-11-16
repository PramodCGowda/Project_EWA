const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryName: String,
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = { Category };
