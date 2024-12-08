const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/contact.controller");

// Get all contacts
router.get("/", ContactController.getAllContacts);
router.post("/", ContactController.createContact);
router.put("/:contactId", ContactController.updateContact);
router.delete("/delete/:contactId", ContactController.deleteContact);
module.exports = router;
