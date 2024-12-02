// Import the contacts model
const Contact = require("../models/contact.model");

// Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    // Retrieve all contacts from the database
    const contacts = await Contact.find();

    // respond with the retrieved contacts
    res.status(200).json({
      success: true,
      message: "Contacts retrieved successfully",
      data: contacts,
    });
  } catch (error) {
    // Log the error
    console.log("Error fetching contacts", error.message);
    res.status(500).json({
      success: false,
      message: "An error occured while retrieving contacts",
      error: error.message,
    });
  }
};

// Add a contact
exports.createContact = async (req, res) => {
  try {
  } catch (error) {}
};
