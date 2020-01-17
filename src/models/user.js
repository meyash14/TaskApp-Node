const mongoose = require('mongoose')
const validator = require('validator')


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

module.exports = User

// const me = new User({
//     name: "Yash",
//     email:'meyash14@gmail.com',
//     age: 26,
//     password:'Password'
// })

// //saving this instance

// //save method returns a promise
// me.save() .then(()=> {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!',error)
// })