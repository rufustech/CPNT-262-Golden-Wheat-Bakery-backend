const Product = require("../models/productsModel");

const getProducts = async (req, res) => {
    const { category } = req.query;
    try {
      const filter = category ? { category } : {};
      const products = await Product.find(filter);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  };

  // Get a single product by ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  };
  
  // Create a new product
  const createProduct = async (req, res) => {
    const { name, description, price, weight, shelfLife, ingredients, inventory, category } = req.body;
  
    try {
      const newProduct = new Product({
        name,
        description,
        price,
        weight,
        shelfLife,
        ingredients,
        inventory,
        category,
      });
  
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ error: "Failed to create product", details: error.message });
    }
  };
  
  // Update an existing product
  const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
        new: true, // Return the updated document
        runValidators: true, // Ensure validations are run
      });
  
      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ error: "Failed to update product", details: error.message });
    }
  };
  
  // Delete a product by ID
  const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
  
      if (!deletedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
  
      res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  };
  
  module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };