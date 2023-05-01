// models/User.js
// adapted from https://itnext.io/using-mongoose-with-next-js-11-b2a08ff2dd3c


import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  passphrase: String,
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)