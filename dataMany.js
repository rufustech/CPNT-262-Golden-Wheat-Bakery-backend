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

const Products = require("./models/productsModel");

const addProducts = async () => {
  const products = [
    {
      "name": "Plain Bun",
      "description": "Soft and fluffy plain bun.",
      "price": 0.99,
      "weight": 50,
      "shelfLife": "3 days",
      "ingredients": ["flour", "water", "yeast", "salt"],
      "inventory": 100,
      "category": "Buns"
    },
    {
      "name": "Cheese Bun",
      "description": "Bun filled with melted cheese.",
      "price": 1.49,
      "weight": 60,
      "shelfLife": "2 days",
      "ingredients": ["flour", "cheese", "milk", "yeast"],
      "inventory": 80,
      "category": "Buns"
    },
    {
      "name": "Garlic Butter Bun",
      "description": "Bun infused with garlic and butter flavor.",
      "price": 1.29,
      "weight": 55,
      "shelfLife": "2 days",
      "ingredients": ["flour", "garlic", "butter", "yeast"],
      "inventory": 70,
      "category": "Buns"
    },
    {
      "name": "Cinnamon Roll Bun",
      "description": "Sweet bun rolled with cinnamon and sugar.",
      "price": 2.49,
      "weight": 75,
      "shelfLife": "3 days",
      "ingredients": ["flour", "cinnamon", "sugar", "butter"],
      "inventory": 50,
      "category": "Buns"
    },
    {
      "name": "Sesame Seed Bun",
      "description": "Soft bun topped with sesame seeds.",
      "price": 1.19,
      "weight": 50,
      "shelfLife": "3 days",
      "ingredients": ["flour", "sesame seeds", "yeast", "salt"],
      "inventory": 90,
      "category": "Buns"
    },
    {
      "name": "Onion Bun",
      "description": "Bun with caramelized onions baked inside.",
      "price": 1.39,
      "weight": 55,
      "shelfLife": "3 days",
      "ingredients": ["flour", "onions", "butter", "yeast"],
      "inventory": 60,
      "category": "Buns"
    },
    {
      "name": "Whole Wheat Bun",
      "description": "Healthy whole wheat bun.",
      "price": 1.29,
      "weight": 60,
      "shelfLife": "3 days",
      "ingredients": ["whole wheat flour", "water", "yeast", "salt"],
      "inventory": 110,
      "category": "Buns"
    },
    {
        "name": "White Bread Loaf",
        "description": "Soft and fluffy white bread loaf.",
        "price": 2.99,
        "weight": 400,
        "shelfLife": "5 days",
        "ingredients": ["flour", "water", "yeast", "salt", "sugar"],
        "inventory": 100,
        "category": "Bread"
      },
      {
        "name": "Whole Wheat Bread",
        "description": "Nutritious whole wheat bread.",
        "price": 3.49,
        "weight": 450,
        "shelfLife": "5 days",
        "ingredients": ["whole wheat flour", "water", "yeast", "salt"],
        "inventory": 80,
        "category": "Bread"
      },
      {
        "name": "Rye Bread",
        "description": "Dense and flavorful rye bread.",
        "price": 3.99,
        "weight": 500,
        "shelfLife": "6 days",
        "ingredients": ["rye flour", "water", "yeast", "salt"],
        "inventory": 50,
        "category": "Bread"
      },
      {
        "name": "Sourdough Bread",
        "description": "Traditional sourdough bread with tangy flavor.",
        "price": 4.49,
        "weight": 500,
        "shelfLife": "7 days",
        "ingredients": ["flour", "water", "salt", "starter"],
        "inventory": 40,
        "category": "Bread"
      },
      {
        "name": "Multigrain Bread",
        "description": "Healthy bread with a mix of grains and seeds.",
        "price": 3.99,
        "weight": 450,
        "shelfLife": "5 days",
        "ingredients": ["flour", "grains", "water", "yeast"],
        "inventory": 70,
        "category": "Bread"
      },
      {
        "name": "French Baguette",
        "description": "Crispy French baguette with a soft center.",
        "price": 2.49,
        "weight": 300,
        "shelfLife": "2 days",
        "ingredients": ["flour", "water", "yeast", "salt"],
        "inventory": 90,
        "category": "Bread"
      },
      {
        "name": "Ciabatta Bread",
        "description": "Italian bread with a crisp crust and airy inside.",
        "price": 3.29,
        "weight": 400,
        "shelfLife": "4 days",
        "ingredients": ["flour", "olive oil", "water", "yeast"],
        "inventory": 60,
        "category": "Bread"
      },
      {
        "name": "Chocolate Croissant",
        "description": "Buttery croissant filled with rich chocolate.",
        "price": 2.99,
        "weight": 100,
        "shelfLife": "3 days",
        "ingredients": ["flour", "butter", "chocolate", "yeast"],
        "inventory": 70,
        "category": "Pastries"
      },
      {
        "name": "Apple Danish",
        "description": "Pastry filled with apple and cinnamon.",
        "price": 2.49,
        "weight": 120,
        "shelfLife": "2 days",
        "ingredients": ["flour", "butter", "apple", "sugar", "cinnamon"],
        "inventory": 60,
        "category": "Pastries"
      },
      {
        "name": "Custard Tart",
        "description": "Creamy custard in a crisp pastry shell.",
        "price": 2.79,
        "weight": 110,
        "shelfLife": "3 days",
        "ingredients": ["flour", "custard", "butter", "sugar"],
        "inventory": 50,
        "category": "Pastries"
      },
      {
        "name": "Blueberry Muffin",
        "description": "Moist muffin loaded with blueberries.",
        "price": 2.29,
        "weight": 150,
        "shelfLife": "3 days",
        "ingredients": ["flour", "blueberries", "butter", "sugar"],
        "inventory": 80,
        "category": "Pastries"
      },
      {
        "name": "Lemon Tart",
        "description": "Tangy lemon filling in a crisp pastry shell.",
        "price": 2.99,
        "weight": 100,
        "shelfLife": "3 days",
        "ingredients": ["flour", "lemon", "butter", "sugar"],
        "inventory": 40,
        "category": "Pastries"
      },
      {
        "name": "Strawberry Puff Pastry",
        "description": "Puff pastry topped with fresh strawberries.",
        "price": 3.49,
        "weight": 90,
        "shelfLife": "2 days",
        "ingredients": ["flour", "butter", "strawberries", "sugar"],
        "inventory": 60,
        "category": "Pastries"
      },
      {
        "name": "Eclair",
        "description": "Choux pastry filled with cream and topped with chocolate.",
        "price": 2.79,
        "weight": 100,
        "shelfLife": "2 days",
        "ingredients": ["flour", "cream", "chocolate", "butter"],
        "inventory": 50,
        "category": "Pastries"
      }
  ];

  try {
    const result = await Products.create(products);
    console.log("products added", result);
  } catch (err) {
    console.error("Error adding products:", err);
  }
};

addProducts();