const Comment = require("../models/commentsModel");

const getComments = async (req, res) => {
	const { category } = req.query;
	try {
		const filter = category ? { category } : {};
		const comment = await Comment.find(filter);
		res.status(200).json(comment);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch comments" });
	}
};

// Get a single product by ID
const getCommentsById = async (req, res) => {
	const { id } = req.params;
	try {
		const comments = await Comment.findById(id);
		if (!comments) {
			return res.status(404).json({ error: "Comment not found" });
		}
		res.status(200).json(comments);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch comment" });
	}
};

// Create a new product
const createComments = async (req, res) => {
	const { user, item, text, createdAt } = req.body;

	try {
		const newComments = new Comment({
			user,
			item,
			text,
			createdAt,
		});

		await newComments.save();
		res.status(201).json(newComments);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to create comment", details: error.message });
	}
};

// Update an existing product
const updateComments = async (req, res) => {
	const { id } = req.params;
	const updateData = req.body;

	try {
		const updatedComments = await Comment.findByIdAndUpdate(id, updateData, {
			new: true, // Return the updated document
			runValidators: true, // Ensure validations are run
		});

		if (!updatedComments) {
			return res.status(404).json({ error: "Comment not found" });
		}

		res.status(200).json(updatedComments);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to update comment", details: error.message });
	}
};

// Delete a product by ID
const deleteComments = async (req, res) => {
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
		res.status(500).json({ error: "Failed to delete comment" });
	}
};

module.exports = {
	getComments,
	getCommentsById,
	createComments,
	updateComments,
	deleteComments,
};
