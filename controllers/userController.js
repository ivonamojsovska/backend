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
  const {email, password} = req.body
  try {
    const user = await User.signup(email, password)
    res.status(200).json({email, user})
  } catch (err) {
    res.status(400).json({err: err.message})
  }
};

module.exports = { loginUser, signupUser };
