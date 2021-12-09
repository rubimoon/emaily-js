const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
});

// create the model class if it doesn't exit, while it won't override it if already exited.
mongoose.model('users',userSchema);

