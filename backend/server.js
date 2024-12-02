require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import routes and midlleware
// Routes
const contactRoutes = require("./routes/contact.routes");
const userRoutes = require("./routes/user.routes");

// Middleware
const errorHandler = require("./middleware/error.middleware");

// Cors configurations
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

// Express app
const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/v1/contacts", contactRoutes);
app.use("/api/v1/users", userRoutes);

// Initialize global error handler
app.use(errorHandler);

mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Working and Running!!! Connected to db & listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
