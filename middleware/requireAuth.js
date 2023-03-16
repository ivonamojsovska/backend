const jwt = require("jsonwebtoken")
const User = require("../models/userSchema")

const requireAuth = async (req, res, next) => {
    // Verify authentication
    const {authorization} = req.headers
    if (!authorization) {
        return res.status(401).json({error: "Authorization token required"})
    }
    // Spliting the header and the token by targeting the space between
    const token = authorization.split(' ')[1]
    // Comparing tokens
    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({_id}).select("_id")
        next()

    } catch (err) {
        console.log(err)
        res.status(401).json({error: "Request is not authorized"})
    }
}

module.exports = requireAuth