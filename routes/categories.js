const express = require("express");
const {
  getCategory,
  getCategories,
  createCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");
const router = express.Router();

router.route("/").get(getCategories).post(createCategories);

router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
