const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(a+b)

        },2000)
    })
}

// add(1,2).then((sum) => { //1 call to async
//     console.log(sum)
//     add(sum,1).then((sum2) => { //second async task calling inside another is bad method as nested promise makes it complicated like multiple callbacks.
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     }) 
    
// }).catch((e) => {
//     console.log(e)
// })

//promise chaining --> in this we return the next promise from the first promise "then" callback but "then" call of next promise comes after the first 
add(1,1).then((sum) => {
    console.log(sum)
    return add(sum,4)

}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})


// promise chaining in respect to mongoose
const mongoose = require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

//5e1ec29e142899284812a65e 
User.findByIdAndUpdate('5e1ec29e142899284812a65e',{ age: 1}).then((user) => {
    console.log(user)
    return (User.countDocuments({age:1}))
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

Task.findByIdAndDelete('5e1ebfb91aef5f29e46ebf01').then((task) => {
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})