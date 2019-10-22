const mongoose = require('mongoose')

const UserSchema = new mongoose.UserSchema({
  email: String,
})

module.exports = mongoose.model('User', UserSchema)