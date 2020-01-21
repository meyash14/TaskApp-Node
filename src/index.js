const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users',(req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user) 
    }).catch((e) => {
        res.status(400).send(e)
    })
    // console.log(req.body)
    // res.send('Testing')
})

//Route for task cretion via REST

app.post('/tasks',(req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.send(task) 
    }).catch((e) => {
        res.status(400).send(e)
    })
    
})
//Route to get multiple users
app.get('/users',(req,res) => {
    //implementing useing promise can be done via callback fn as well
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send() // service down status 500
    })

})

//get individual user by id using route parameter for id
app.get('/users/:id',(req,res) => {
    User.findById(req.params.id).then((user) => { //req.params contains all the route parameters
        res.send(user)
    }).catch((e) => {
        res.status(404).send()
    })
    

})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})