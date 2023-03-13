const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const Todo = require('./models/ToDo')
require(`dotenv`).config()

app.use(express.json())
app.use(cors())


app.listen(3000, () => {
    console.log('listening')
})

app.get('/', async (req, res) => {
    try {
        const ToDos = await Todo.find({})
        res.json(ToDos)
    } catch (err) {
        console.log(err)
    }
})

app.post('/todo', async (req, res) => {
    try {
        const newTodo = await Todo.create(req.body)
        res.json(newTodo)
    } catch (err) {
        console.log(err)
    }
})

app.put('/todo/:id', async (req, res) => {
    try {
        const editTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(editTodo)
    } catch (err) {
        console.log(err)
    }
})

app.delete('/todo/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIDandRemove(req.params.id)
        req.json(deletedTodo)

    } catch (err) {
        console.log(err)
    }
})



mongoose.connect(process.env.MONGODB).then(() => {
    console.log('mongo connected')
})