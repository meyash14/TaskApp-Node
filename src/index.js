const express = require('express')

const app = express()
const port = process.env.PORT || 3000

//POST for resource creation
app.post('/users',(req,res) => {
    res.send('Testing')
})



app.listen(port,() => {
    console.log('Server is up on port '+port)
})