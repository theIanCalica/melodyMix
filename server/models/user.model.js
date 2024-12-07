const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SocialAccountSchema = require("./socialAccount.model");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    dob: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["Man", "Woman", "Prefer not to say"],
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    profile_picture: {
      public_id: {
        type: String,
        default: "cihdkwnga1whsejrbmkb",
      },
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/dydg4oqy5/image/upload/v1733662639/cihdkwnga1whsejrbmkb.png",
      },
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      default: "customer",
      enum: ["customer", "admin", "artist"],
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
