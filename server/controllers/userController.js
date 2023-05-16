import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import {
  registerValidation,
  loginValidation,
} from "../validations/userValidation.js";

// @desc    Auth user & get token
const authUser = async (args) => {
  const { email, password } = args;

  const { error } = loginValidation(args);
  if (error) return new Error(error.details[0].message);

  try {
    const user = await User.findOne({ email: email });
    if (!user) return new Error("User doesnt exist");

    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) return new Error("Invalid password");

    const token = await user.generateAuthToken();

    return { user, token };
  } catch (e) {
    return e;
  }
};

// @desc    Register a new user
const registerUser = async (args) => {
  const { error } = registerValidation(args);
  if (error) return new Error(error.details[0].message);

  try {
    const user = new User(args);
    const token = await user.generateAuthToken();
    await user.save();

    return { user, token };
  } catch (e) {
    return e;
  }
};

// @desc    Get all users
const getUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (e) {
    return e;
  }
};

export default { authUser, registerUser, getUsers };