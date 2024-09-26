const express = require("express");
const {
  getNotes,
  updateNote,
  deleteNotes,
  createNote,
} = require("../controllers/noteController");
const router = express.Router();

router.post("/", createNote);
router.get("/", getNotes);
router.patch("/", updateNote);
router.delete("/", deleteNotes);

module.exports = router;
