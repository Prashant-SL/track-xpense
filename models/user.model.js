const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: "v1",
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
