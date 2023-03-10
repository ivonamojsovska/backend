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

mongoose.connect(process.env.MONGODB, () => {
    console.log('The connection with mongodb is established');
})

mongoose.connection.once('open', () => {
    console.log('connected to mongoDB')
})