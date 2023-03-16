// Requirements
const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");

// Middleware
router.use(requireAuth);

// Controller
const {
  showAllTasks,
  createTask,
  showSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

// ROUTES
// Index
router.get("/", showAllTasks);

// Create
router.post("/", createTask);

// Show
router.get("/:id", showSingleTask);

// Update
router.put("/:id", updateTask);

// Delete
router.delete("/:id", deleteTask);

// Export
module.exports = router;
