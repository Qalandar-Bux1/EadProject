// models/User.js
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isEmailVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    name: { type: String },
    phoneNumber: { type: String },
  
});
module.exports = mongoose.model('User', userSchema)