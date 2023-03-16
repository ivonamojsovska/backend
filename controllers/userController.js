const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

// Creating function to create webtokens
const createToken = (id) => {
  return jwt.sign({_id: id}, process.env.SECRET, {expiresIn: "3d"})
}

// Login user
const loginUser = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await User.login(email, password)
    // After login, they will be given a webtoken
    const token = createToken(user._id)
    res.status(200).json({email, token})
  } catch (err) {
    res.status(400).json({err: err.message})
  }
};

// Signup user
const signupUser = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await User.signup(email, password)
    // After the user signs up, they will be given a webtoken
    const token = createToken(user._id)
    res.status(200).json({email, token})
  } catch (err) {
    res.status(400).json({err: err.message})
  }
};

module.exports = { loginUser, signupUser };
