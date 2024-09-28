const express = require("express");
const {
  getNotes,
  updateNote,
  deleteNotes,
  createNote,
} = require("../controllers/noteController");
const verifyJWT = require("../middleware/verifyJwt");
const router = express.Router();

router.use(verifyJWT);

router.post("/", createNote);
router.get("/", getNotes);
router.patch("/", updateNote);
router.delete("/", deleteNotes);

module.exports = router;
