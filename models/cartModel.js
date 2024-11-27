const mongoose = require("mongoose");

// Schema for the items inside the cart
const cartItemSchema = new mongoose.Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Product",
	},
	// Set default quantity
	quantity: {
		type: Number,
		required: true,
		min: 1,
		default: 1,
	},
	price: {
		type: Number,
		required: true,
	},
});

// Making the main cart schema
const cartSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	items: [cartItemSchema],
	totalPrice: {
		type: Number,
		required: true,
		default: 0, // Set a default value
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
