const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api' // has db name in connection string

mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true //ensures when mongoose works with mongo db  indexes are created so as to quickly access data we need
})


const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email: {
            type:String,
            trim:true,
            lowercase:true,
            validate(value) {
                if(!validator.isEmail(value))
                throw new Error('Email is not valid')
            }
    },
    password: {
      type:String,
      required:true,
      trim:true,
      lowercase:true,
      validate(value)
      {
          if(value.length<6)
          {
              throw new Error('Password must be more than 6 letters')
          }
          if(value.includes("password"))
          {
              throw new Error('Password cannot contain "Password/password"')
          }
          
      }  
    },
    age: {
            type:Number,
            default:0,
            validate(value) {
                if(value<0)
                {
                    throw new Error('Age must be a positive number')
                }
            }
    }
})

const me = new User({
    name: "Yash",
    email:'meyash14@gmail.com',
    age: 26,
    password:'Password'
})

//saving this instance

//save method returns a promise
me.save() .then(()=> {
    console.log(me)
}).catch((error) => {
    console.log('Error!',error)
})

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

const task = new Task ({
    description:'run',
    completed:true
})

task.save().then(() =>{
    console.log(task)
}).catch((error) => {
    console.log(error)
})