const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware"); // Import middleware
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsController"); // Import controller methods

// Define routes
router.get("/", getAllProducts); // Get all products (protected)
router.get("/:id", authMiddleware.protect, getProductById); // Get product by ID (protected)
router.post("/", authMiddleware.protect, createProduct); // Create a new product (protected)
router.put("/:id", authMiddleware.protect, updateProduct); // Update a product by ID (protected)
router.delete("/:id", authMiddleware.protect, deleteProduct); // Delete a product by ID (protected)

module.exports = router;
