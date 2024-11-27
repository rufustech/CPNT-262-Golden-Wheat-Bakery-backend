const mongoose = require("mongoose");
const Comment = require("../models/commentsModel");
console.log(Comment);

// Get all comments or filter by category (if query param is provided)
const getComments = async (req, res) => {
  const { category } = req.query;

  try {
    const filter = category ? { category } : {};
    const comments = await Comment.find(filter).populate("user", "username"); // Populate user details if needed
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch comments",
      details: error.message,
    });
  }
};

// Get a single comment by ID
const getCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findById(id).populate("user", "username"); // Populate user details if needed
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch comment",
      details: error.message,
    });
  }
};

// Create a new comment
const createComment = async (req, res) => {
	console.log(req);
	
  const { user, item, text, createdAt } = req.body;

  try {
    // Validate that user and item are valid ObjectIds
    if (
      !user || !item
    ) {
      return res.status(400).json({ error: "Invalid user or item ID" });
    }

    const newComment = new Comment({
      user: user._id,
      item,
      text,
      createdAt,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error("Error creating comment:", error); // Log the error to the console
    res
      .status(500)
      .json({ error: "Failed to create comment", details: error.message });
  }
};

// Update an existing comment by ID
const updateComment = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validations are applied
    });

    if (!updatedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(400).json({
      error: "Failed to update comment",
      details: error.message,
    });
  }
};

// Delete a comment by ID
const deleteComment = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedComment = await Comment.findByIdAndDelete(id);

    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.status(200).json({
      message: "Comment deleted successfully",
      comment: deletedComment,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete comment",
      details: error.message,
    });
  }
};

module.exports = {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
