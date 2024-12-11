/*
import User from "../models/user.model";
import { Request, Response, NextFunction } from "express";

// Register
exports.register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, dob, gender, phoneNumber } = req.body;

    if ((!name || !email, !dob, !gender, !phoneNumber)) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }

    const newUser = new User({ name, email, dob, gender, phoneNumber });
  } catch (error) {
    console.error("Error registeration", error);
    next(error);
  }
};

// Username and password Login
exports.login = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    console.log("Error log in ", error);
    next(error);
  }
};

// google login
exports.googleLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    console.log("Error google log in", error);
    next(error);
  }
};

// Facebook Login
exports.facebookLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    console.log("Error facebook login ", error);
    next(error);
  }
};

// Logout
exports.logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    console.log("Error logout", error);
    next(error);
  }
};
*/
