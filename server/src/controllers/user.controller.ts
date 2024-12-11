import User from "../models/user.model";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Sign up 
const signup = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const { name, email, password, gender, phoneNumber, dob } = req.body;

  if (!name || !email || !password || !gender || !phoneNumber || !dob) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      gender,
      phoneNumber,
      dob,
      role: "customer",
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
    });

  } catch (error) {

    if (error instanceof Error) {
      console.error("Error during registration:", error.message);
      return res.status(500).json({ success: false, message: error.message });
    } else {
      console.error("Unexpected error during registration:", error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  }
};

// Get all users
const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const users = await User.find();
    return res.status(200).json({
      success: true,
      message: "Successfully fetched all users!",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export { signup, getAllUsers };
