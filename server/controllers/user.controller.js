// Import the user model
const User = require("../models/user.model");

// Get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "Successfully fetched all users!",
      data: users,
    });
  } catch (error) {
    console.log("Error fetching users", error.message);
    next(error);
  }
};
