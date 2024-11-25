const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsController");

const router = express.Router();

// CRUD routes
router.get("/", getProducts); // GET all products
router.get("/:id", getProductById); // GET a product by ID
router.post("/", createProduct); // POST a new product
router.put("/:id", updateProduct); // PUT update a product by ID
router.delete("/:id", deleteProduct); // DELETE a product by ID

module.exports = router;
