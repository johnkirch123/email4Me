const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    required: true,
    default: 0
  }
});

mongoose.model('users', UserSchema);
