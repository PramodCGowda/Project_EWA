const express = require("express");
const router = express.Router();

const { Category } = require("../dbModels/category");

// -----------------GET REQUESTS

router.get("/", async (req, res) => {
  try {
    const allServiceCategories = await Category.find();
    return res.status(200).json({
      message: "Successfully Fetched !",
      ServiceCategories: allServiceCategories,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong !",
      ServiceCategories: null,
    });
  }
});

// -----------------POST REQUESTS

router.post("/add", async (req, res) => {
  try {
    const newCategory = new Category({ ...req.body });
    const addedCategory = await newCategory.save();
    return res.status(200).json({
      message: "Successfully Fetched !",
      serviceCategory: addedCategory,
    });
  } catch (err) {
    console.log("Err", err);
    return res.status(500).json({
      message: "Unable to add category at the moment !",
      serviceCategory: null,
    });
  }
});

module.exports = router;
