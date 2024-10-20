const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/StudentDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Register the Student model
require("./student.model");
