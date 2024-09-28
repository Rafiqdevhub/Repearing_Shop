const express = require("express");
const loginLimiter = require("../middleware/loginLimiter");
const { login, refresh, logout } = require("../controllers/authController");
const router = express.Router();

router.post("/", loginLimiter, login);
router.get("/refresh", refresh);
router.post("/logout", logout);

module.exports = router;
