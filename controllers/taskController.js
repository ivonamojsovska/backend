// Requirements
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TaskModel = require("../models/taskSchema");

// Routes

// INDEX
router.get("/", async (req, res) => {
  try {
    const allTasks = await TaskModel.find({});
    res.json(allTasks);
  } catch (err) {
    console.log(err);
  }
});

// CREATE
router.post("/", async (req, res) => {
  try {
    const newTask = await TaskModel.create(req.body);
    res.json(newTask);
  } catch (err) {
    console.log(err);
  }
});

// SHOW
router.get("/:id", async (req, res) => {
  try {
    const foundTask = await TaskModel.findById(req.params.id);
    res.json(foundTask);
  } catch (err) {
    console.log(err);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    console.log(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await TaskModel.findByIdAndDelete(req.params.id);
    res.json(deletedTask);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
