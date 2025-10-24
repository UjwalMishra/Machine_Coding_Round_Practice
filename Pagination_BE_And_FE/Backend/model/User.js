const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  userName: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
