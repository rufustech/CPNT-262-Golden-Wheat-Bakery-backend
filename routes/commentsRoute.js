const express = require("express");
const Comment = require("../models/commentsModel");

const router = express.Router();

//Get request
router.get("/", async (req, res) => {
	try {
		const comment = await c.find();
		res.status(200).json(comment);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch comment" });
	}
});

//post request

router.post("/", async (req, res) => {
	const {} = req.body;

	try {
		//Save the bread collections
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
			.json({ error: "Failed to create comment", details: err.message });
	}
});

module.exports = router;
