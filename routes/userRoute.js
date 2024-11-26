const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

//If else for guest and authenticated users
const { protect } = require("../middleware/authMiddleware"); // Import the protect middleware

const router = express.Router();

// Routes
router.get("/", protect, getAllUsers); // Protect the route for fetching all users
router.post("/", createUser); // Don't protect this route (public access)
router.get("/:id", protect, getUserById); // Protect the route for fetching a user by ID
router.put("/:id", protect, updateUser); // Protect the route for updating a user
router.delete("/:id", protect, deleteUser); // Protect the route for deleting a user

module.exports = router;
