const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

//Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

//Protected Routes
router.get("/profile", protect, (req, res) => {
  res.json({ message: `Welcome, UserID:${req.user.id}` });
});

module.exports = router;
