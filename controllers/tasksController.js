// Requirements
const Tasks = require("../models/taskSchema");

// Get ALL tasks
const showAllTasks = async (req, res) => {
  try {
    const allTasks = await Tasks.find({});
    res.json(allTasks);
  } catch (err) {
    console.log(err);
  }
};

// CREATE task
const createTask = async (req, res) => {
  try {
    const newTask = await Tasks.create(req.body);
    res.json(newTask);
  } catch (err) {
    console.log(err);
  }
};

// Get a SINGLE task
const showSingleTask = async (req, res) => {
  try {
    const foundTask = await Tasks.findById(req.params.id);
    res.json(foundTask);
  } catch (err) {
    console.log(err);
  }
};

// UPDATE task
const updateTask = async (req, res) => {
  try {
    const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTask);
  } catch (err) {
    console.log(err);
  }
};

// DELETE task
const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Tasks.findByIdAndDelete(req.params.id);
    res.json(deletedTask);
  } catch (err) {
    console.log(err);
  }
};

// Export
module.exports = {
  showAllTasks,
  createTask,
  showSingleTask,
  updateTask,
  deleteTask,
};
