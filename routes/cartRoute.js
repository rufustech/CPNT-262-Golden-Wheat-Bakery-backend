const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { addToCart, viewCart } = require("../controllers/cartController");

router.get("/", viewCart);
router.post("/:id", addToCart);

module.exports = router;
