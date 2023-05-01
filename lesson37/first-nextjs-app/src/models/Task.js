// models/Task.js


import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  tasklist: String,
  description: String,
  completed: Boolean,
})

module.exports = mongoose.models.Task || mongoose.model('Task', UserSchema)