// Requirements
const express = require("express");

// Controller functions
const {loginUser, signupUser} = require("../controllers/userController")

const router = express.Router();

// Routes

// Login
router.post("/login", loginUser)

// Signup
router.post("/signup", signupUser)

module.exports = router