import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(200)
        .json({ success: false, message: "Account already existed" });
      // alert("Account already exist");
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    newUser.save();

    // alert("Account created Successfully");
    return res
      .status(200)
      .json({ success: true, message: "Account created Successfully" });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "Error in Adding User" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "User not existed" });
    }

    const checkpassword = await bcrypt.compare(password, user.password);
    if (!checkpassword) {
      return res
        .status(404)
        .json({ success: false, message: "Wrong password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "6h",
    });

    return res.status(200).json({
      success: true,
      message: "Logged in Successfully",
      user: user.name,
      token,
    });
    // alert("Log in Successfully");
  } catch (error) {
    console.log(error);
  }
});

export default router;
