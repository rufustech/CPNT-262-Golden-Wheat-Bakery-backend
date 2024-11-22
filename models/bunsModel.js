const mongoose = require("mongoose");

const bunSchema = new mongoose.Schema({
	bunType: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	weight: { type: Number, required: true }, // in grams
	ingredients: [{ type: String, required: true }], // Array of ingredients
	inventory: { type: Number, required: true }, // Quantity in stock
});

const Bun = mongoose.model("Bun", bunSchema);

module.exports = Bun;
