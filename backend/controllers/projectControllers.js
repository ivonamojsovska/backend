const express = require("express")
const router = express.Router()

const mongoose = require('mongoose')
const TodoModel = require('../models/ToDo.js')



//Index
router.get('/', async (req, res) => {
    try {
        const allTodos = await TodoModel.find({});
        res.json(allTodos);
    } catch (err) {
        console.log(err);
    }
})

//Create
router.post('/', async (req, res) => {
    try {
        const newTodo = await TodoModel.create(req.body)
        res.json(newTodo)
    } catch (err) {
        console.log(err)
    }
})

//Show
router.get('/:id', async (req, res) => {
    try {
        const showTodo = await TodoModel.findById(req.params.id)
        res.json(showTodo)
    } catch (err) {
        console.log(err)
    }
})


//Update
router.put('/:id', async (req, res) => {
    try {
        const editTodo = await TodoModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(editTodo)
    } catch (err) {
        console.log(err)
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await TodoModel.findByIDandRemove(req.params.id)
        res.json(deletedTodo)

    } catch (err) {
        console.log(err)
    }
})


module.exports = router