const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number },
  shelfLife: { type: String },
  image: { type: String },
  ingredients: [{ type: String }],
  inventory: { type: Number, required: true, default: 0 },
  category: { type: String, required: true }, // e.g., 'Bread', 'Buns', 'Pastries',
  image: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
