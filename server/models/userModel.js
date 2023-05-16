import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username is already used."],
    required: [true, "Username is required."],
    trim: true,
  },
  email: {
    type: String,
    match: [
      /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
      "Please fill a valid email address",
    ],
    unique: [true, "Email is already used."],
    required: [true, "Email is required."],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
});

// Generate authentication token
userSchema.methods.generateAuthToken = function () {
  const user = this;
  const payload = { _id: user._id.toString, email: user.email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "3600",
  });

  return token;
};

// Hash password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  // Hash password
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(user.password, salt);

  if (user.isModified("password")) {
    user.password = hashedPassword;
  }

  next();
});

const User = mongoose.model("User", userSchema);

export default User;
