const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    lowercase: true,
  },
  credits: {
    type: Number,
    default: 0,
  },
});

// create the model class if it doesn't exit, while it won't override it if already exited.
// load the schema "into" mongoose
module.exports = mongoose.model('users', userSchema);
