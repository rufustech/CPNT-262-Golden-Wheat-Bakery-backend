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

const User = require("./models/userAuthModel");

const addUser = async () => {
  const user = {
    username: "Feli",
    email: "feli@ceo.com",
    password: "felirocks",
    createdAt: new Date(),
  };

  try {
    const result = await User.create(user);
    console.log("user added", result);
  } catch (err) {
    console.error("Error adding user:", err);
  }
};

addUser();



// API Routes
/*app.use("/api/bread", breadRoute);
app.use("/api/user", userRoute);

// Default Route
app.get("/ ", (req, res) => {
  res.send("Welcome to the Node.js Server!");
}); */

// Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
