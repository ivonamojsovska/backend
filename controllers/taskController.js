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