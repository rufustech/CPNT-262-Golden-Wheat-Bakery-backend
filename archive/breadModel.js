const mongoose = require("mongoose");

// Bread Schema

const breadSchema = new mongoose.Schema({
	breadType: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	weight: { type: Number, required: true }, // in grams
	shelfLife: { type: String, required: true }, // e.g., "3 days"
	ingredients: [{ type: String, required: true }], // Array of ingredients
	inventory: { type: Number, required: true }, // Quantity in stock
});

module.exports = mongoose.model("Bread", breadSchema);
