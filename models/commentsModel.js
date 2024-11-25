const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	item: { type: mongoose.Schema.Types.ObjectId, required: true }, // Links to Bread, Pastry, or Bun
	text: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;

