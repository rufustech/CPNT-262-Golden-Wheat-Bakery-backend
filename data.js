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

const Bread = require("./models/breadModel");

const addBread = async () => {
  const bread = {
    breadType: "Sour Dough",
    description: "Awesome Dough",
    price: 5,
    weight: 200,
    shelfLife: "2 days",
    ingredients: ["flour", "salt"],
    inventory: 10,
  };

  try {
    const result = await Bread.create(bread);
    console.log("user added", result);
  } catch (err) {
    console.error("Error adding user:", err);
  }
};

addBread();
