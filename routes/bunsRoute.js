const express = require("express");
const Buns = require("../models/bunsModel");

const router = express.Router();

//Get request
router.get("/", async (req, res) => {
	try {
		const buns = await Buns.find();
		res.status(200).json(buns);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch Bread" });
	}
});

//post request

router.post("/", async (req, res) => {
	const {
		bunType,
		description,
		price,
		weight,
		shelfLife,
		ingredients,
		inventory,
	} = req.body;

	try {
		//Save the bread collections
		const newBun = new Bun({
			bunType,
			description,
			price,
			weight,
			shelfLife,
			ingredients,
			inventory,
		});

		await newBun.save();
		res.status(201).json(newBun);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to create buns", details: err.message });
	}
});

module.exports = router;
