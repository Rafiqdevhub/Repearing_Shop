const express = require("express");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const verifyJWT = require("../middleware/verifyJwt");
const router = express.Router();

router.use(verifyJWT);

router.post("/", createUser);
router.get("/", getAllUsers);
router.patch("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;
