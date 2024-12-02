const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SocialAccountSchema = require("./socialAccount.model");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required."],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, "Last Name is required"],
      trim: true,
    },
    date_of_birth: {
      type: Date,
      // required: [true, "Date of Birth is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone_number: {
      type: String,
      unique: true,
    },
    profile_picture: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      default: "customer",
      enum: ["customer", "admin", "artist"],
    },
    status: {
      type: String,
      required: [true, "Status is required"],
      trim: true,
      enum: ["activated", "deactivated", "unverified"],
      default: "unverified",
    },
    socialAccounts: [SocialAccountSchema],
    fcm_token: {
      type: String,
      default: null,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
