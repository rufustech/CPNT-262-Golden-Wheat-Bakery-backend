const express = require("express");
const {
  getComments,
  getCommentsById,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentsController");

const router = express.Router();

//Get request
router.get("/", async (req, res) => {
  try {
    const comment = await Comment.find();
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comment" });
  }
});

//post request

router.post("/", createComment);

module.exports = router;
