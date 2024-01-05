import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../Utils/error.js";

export const authController = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("User created succesfully");
  } catch (error) {
    next(errorHandler(500, "Functional error"));
  }
};