const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  email: String,
  name: String,
  role: Number,
  role_description: String,
})

mongoose.model('user', UserSchema)
