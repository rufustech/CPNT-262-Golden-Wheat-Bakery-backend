const express = require("express");
const Pastry = require("../models/pastryModel");

const router = express.Router();

//Get request
router.get("/", async (req, res) => {
	try {
		const pastry = await Pastry.find();
		res.status(200).json(pastry);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch Bread" });
	}
});

//post request

router.post("/", async (req, res) => {
	const {
		pastryType,
		description,
		price,
		weight,
		shelfLife,
		ingredients,
		inventory,
	} = req.body;

	try {
		//Save the bread collections
		const newPastry = new Pastry({
			pastryType,
			description,
			price,
			weight,
			shelfLife,
			ingredients,
			inventory,
		});

		await newPastry.save();
		res.status(201).json(newPastry);
	} catch (error) {
		res
			.status(400)
			.json({ error: "Failed to create pastry", details: err.message });
	}
});

module.exports = router;
