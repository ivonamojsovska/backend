// Requirements
const express = require("express");
const router = express.Router();

// Controller
const { loginUser, signupUser } = require("../controllers/userController");

// ROUTES
// Login
router.post("/login", loginUser);

// Signup
router.post("/signup", signupUser);

// Export
module.exports = router;