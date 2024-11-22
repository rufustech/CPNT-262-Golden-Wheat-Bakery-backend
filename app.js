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

// API Routes
// app.use('/api/example', exampleRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js Server!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
