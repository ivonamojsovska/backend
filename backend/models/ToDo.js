const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    user: String,
    date: String,
    title: String,
    description: String,
    location: String,
    completed: Boolean,
})

const ToDo = mongoose.model('ToDo', ToDoSchema)

module.exports = ToDo