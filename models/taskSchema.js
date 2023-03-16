const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: String,
  location: String,
  complete: {
    type: Boolean,
    default: false,
  },
});

const TaskModel = mongoose.model("Tasks", taskSchema);

module.exports = TaskModel;
