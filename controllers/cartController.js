const mongoose = require("mongoose");
const Cart = require("../models/cartModel");
const Product = require("../models/productsModel");

async function addToCart(req, res) {
  try {
    const { productId, quantity, user } = req.body;

    const product = await Product.findById(productId);
    console.log("Product log", product);
    console.log("Request", req);
    console.log("User", user);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Find user cart
    let cart = await Cart.findOne({ user: user._id });
    if (!user) {
      return res.status(401).json({ message: "Not authorized, no user found" });
    }

    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({
        user: user._id,
        items: [],
        totalPrice: 0,
      });
    }

    const existingItem = cart.items.find((item) => item.product === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.price = product.price * existingItem.quantity;
    } else {
      cart.items.push({
        product: product._id,
        quantity,
        price: product.price * quantity, // Store total price for the product
      });
    }

    // Recalculate total price
    cart.totalPrice = cart.items.reduce((total, item) => total + item.price, 0);

    console.log("Saved the cart", cart);
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart" });
    console.error(error);
  }
}

async function viewCart(req, res) {
  const { user } = req.body;
  console.log("Request Body:", req.body);

  if (!user || !user._id) {
    return res
      .status(400)
      .json({ message: "User not found or invalid request" });
  }

  try {
    const cart = await Cart.findOne({ user: user._id }).populate(
      "items.product"
    );

    if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error viewing cart" });
    console.error(error);
  }
}

module.exports = {
  viewCart,
  addToCart,
};
