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

// Get single contact by ID
exports.getSingleContact = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;

    if (!contactId) {
      const error = new Error("Id is required");
      error.statusCode = 400;
      throw error;
    }

    const contact = Contact.findById(contactId);

    // respond with the retrieved contact
    res.status(200).json({
      success: true,
      message: "Contact retrieved successfully",
      data: contact,
    });
  } catch (error) {
    console.log("Error fetching  user", error.message);
    next(error);
  }
};

// Add a contact
exports.createContact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, body } = req.body;

    // Validate values
    if (!name || !email || !phone || !subject || !body) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }

    const newContact = new Contact({ name, email, phone, subject, body });
    const saveContact = await newContact.save();

    // respond with success messsage
    res.status(201).json({
      success: true,
      message: "Sent Successfully",
      data: saveContact,
    });
  } catch (error) {
    console.log("Error creating a contact", error.message);
    next(error);
  }
};

// Update a contact
exports.updateContact = async (req, res, next) => {
  try {
    const { status } = req.body;
    const { contactId } = req.params;

    // Check if the status and contactId is given
    if (!status || !contactId) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }

    // Find the contact and update the status
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      { status },
      { new: true }
    );

    // If no contact is found, return an error
    if (!updatedContact) {
      const error = new Error("Contact not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "Contact status updated",
      contact: updatedContact,
      success: true,
    });
  } catch (error) {
    console.log("Error creating a contact", error.message);
    next(error);
  }
};

// Delete a contact
exports.deleteContact = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;

    if (!contactId) {
      const error = new Error("Id is required");
      error.statusCode = 400;
      throw error;
    }
    const contact = await Contact.findByIdAndDelete(contactId);

    if (!contact) {
      const error = new Error("Contact not found");
      error.statusCode = 400;
      throw error;
    }
    // respond with success delete message
    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.log("Error deleting a contact", error.message);
    next(error);
  }
};
