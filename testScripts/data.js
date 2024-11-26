//Using this to populate data to our DB for endpoint testing
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("MongoDB connection error:", err));

const Product = require("../models/productsModel");

const addProduct = async () => {
	const product = {
		name: "Chocolate Croissant",
		description: "Delicious buttery croissant with a chocolate filling",
		price: 2.99,
		weight: 120,
		shelfLife: "3 days",
		ingredients: ["flour", "butter", "chocolate", "sugar"],
		inventory: 50,
		category: "pastries",
	};

	try {
		const result = await Product.create(product);
		console.log("user added", result);
	} catch (err) {
		console.error("Error adding user:", err);
	}
};

addProduct();
addComment();
