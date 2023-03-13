const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')


//DotEnv setup
require(`dotenv`).config()
const PORT = process.env.PORT || 4000;

//Controllers
const projectController = require('./controllers/projectControllers.js')



app.use(express.json())
app.use(cors())
app.use('/todos', projectController)




app.get('/', (req, res) => {
    res.json({
        succes: true
    })
})





mongoose.connect(process.env.MONGODB).then(() => {
    console.log('mongo connected')
})

app.listen(PORT, () => {
    console.log('listening')
})