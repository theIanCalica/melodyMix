const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

// Get all users
router.get("/", UserController.getAllUsers);

module.exports = router;
