const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/contact.controller");

// Get all contacts
router.get("/", ContactController.getAllContacts);

module.exports = router;
