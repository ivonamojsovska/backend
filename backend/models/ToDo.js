const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    user: String,
    title: String,
    description: String,
    location: String,
    date: String,
})

const ToDo = mongoose.model('ToDo', ToDoSchema)

module.exports = ToDo