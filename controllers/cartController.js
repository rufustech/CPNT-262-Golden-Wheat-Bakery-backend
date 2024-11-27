const Cart = require("../models/cartModel");
const Product = require("../models/productsModel");

async function addToCart(req, res) {
	try {
		const { productId, quantity } = req.body;

		const product = await Product.findById(productId);
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		// Find user cart
		let cart = await Cart.findOne({ user: req.user._id });

		if (!cart) {
			// Create a new cart if it doesn't exist
			cart = new Cart({
				user: req.user._id,
				items: [],
				totalPrice: 0,
			});
		}

		const existingItem = cart.items.find(
			(item) => item.product.toString() === productId
		);

		if (existingItem) {
			existingItem.quantity += quantity;
			existingItem.price = product.price * existingItem.quantity;
		} else {
			cart.items.push({
				product: productId,
				quantity,
				price: product.price * quantity, // Store total price for the product
			});
		}

		// Recalculate total price
		cart.totalPrice = cart.items.reduce((total, item) => total + item.price, 0);

		await cart.save();

		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json({ message: "Error adding to cart", error });
	}
}

async function viewCart(req, res) {
	try {
		const cart = await Cart.findOne({ user: req.user._id }).populate(
			"items.product"
		);

		if (!cart) {
			return res.status(404).json({ message: "Cart is empty" });
		}

		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json({ message: "Error viewing cart", error });
	}
}

module.exports = {
	viewCart,
	addToCart,
};
