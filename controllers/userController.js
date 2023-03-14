const User = require("../models/userSchema");

// Login user
const loginUser = async (req, res) => {
  try {
    res.json({ mssg: "login user" });
  } catch (err) {
    console.log(err);
  }
};

// Signup user
const signupUser = async (req, res) => {
  try {
    res.json({ mssg: "signup user" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { loginUser, signupUser };
