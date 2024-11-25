const express = require("express");
const Bread = require("./breadModel");

const router = express.Router();

//Get request
router.get("/", async (req, res) => {
  try {
    const bread = await Bread.find();
    res.status(200).json(bread);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Bread" });
  }
});

//post request

router.post("/", async (req, res) => {
  const {
    breadType,
    description,
    price,
    weight,
    shelfLife,
    ingredients,
    inventory,
  } = req.body;

  try {
    //Save the bread collections
    const newBread = new Bread({
      breadType,
      description,
      price,
      weight,
      shelfLife,
      ingredients,
      inventory,
    });

    await newBread.save();
    res.status(201).json(newBread);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to create bread", details: err.message });
  }
});

module.exports = router;
