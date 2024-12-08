const User = require("../models/user.model");

// Username and password Login
exports.login = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("Error log in ", error.message);
    next(error);
  }
};

// google login
exports.googleLogin = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("Error google log in", error.message);
    next(error);
  }
};

// Facebook Login
exports.facebookLogin = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("Error facebook login ", error.message);
    next(error);
  }
};

// Logout
exports.logout = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("Error logout", error.message);
    next(error);
  }
};

// Register
exports.register = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("Error registeration", error.message);
    next(error);
  }
};
