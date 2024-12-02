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
router.get("/", getAllProducts); 
router.get("/:id", authMiddleware.protect, getProductById); 
router.post("/", authMiddleware.protect, createProduct); 
router.put("/:id", authMiddleware.protect, updateProduct); 
router.delete("/:id", authMiddleware.protect, deleteProduct);

module.exports = router;
