const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task',{ //mongoose converts the name 'Task' into tasks(ie pluralises it and smallcase)
    description: {
            type:String,
            trim:true,
            required:true
    },
    completed: {
        type:Boolean,
        default:false
    }
})
module.exports = Task
//const task = new Task ({
    //     description:'run',
    //     completed:true
    // })
    
    // task.save().then(() =>{
    //     console.log(task)
    // }).catch((error) => {
    //     console.log(error)
    // })
