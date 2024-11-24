const mongoose = require("mongoose");

const pastrySchema = new mongoose.Schema({
	pastryType: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	weight: { type: Number, required: true }, // in grams
	ingredients: [{ type: String, required: true }], // Array of ingredients
	inventory: { type: Number, required: true }, // Quantity in stock
});

const Pastry = mongoose.model("Pastry", pastrySchema);

module.exports = Pastry;

m;
