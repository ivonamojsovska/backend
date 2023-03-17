// Requirements
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");

// DotEnv setup
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Controllers
const tasksRoutes = require("./routes/tasks");
const userRoutes = require("./routes/user");

// Middleware
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// Routes
app.use("/ta/tasks", tasksRoutes);
app.use("/ta/user", userRoutes);

// Mongoose / MongoDB
mongoose.connect(process.env.MONGODB);
// mongoose.connection.once("open", () => {
//   console.log("connected to MongoDB");
// });

// Listen - Broadcast
app.listen(PORT, () => {
  console.log("the server is listening at " + PORT);
});
