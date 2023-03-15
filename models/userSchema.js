const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Static signup method
userSchema.statics.signup = async function(email, password) { //needs to be a regular function and not an arrow function
    // Validation
    if (!email || !password) {
        throw Error("All feilds must be filled")
    }
    if (!validator.isEmail(email)) {
        throw Error("Email is not valid")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough")
    }
    // Checking to see if an email is already in use
    const exists = await this.findOne({email})
    if (exists) {
        throw Error("Email already in use")
    }
    // Generating Salt
    const salt = await bcrypt.genSalt(10)
    // Hashing with password
    const hash = await bcrypt.hash(password, salt)
    // Creating and saving new user email and hashed password
    const user = await this.create({email, password: hash})
    return user
}

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;