const express = require("express");
const loginLimiter = require("../middleware/loginLimiter");
const router = express.Router();

router.post("/", loginLimiter);

module.exports = router;
