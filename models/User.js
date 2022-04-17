const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
});

mongoose.model("users", UserSchema);
