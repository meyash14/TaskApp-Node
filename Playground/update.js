const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser: true,useUnifiedTopology: true},(error,client)=>{
    
    if(error)
    {
        return console.log('Unable to connect')
    }
    const db = client.db(databaseName)

    // const updatePromise = db.collection('users').updateOne(
    //     {
    //         _id: new ObjectID("5e1706ba74f65f2384fb19a9")
    //     },
    //     {
    //              $set: 
    //              {  //update operator
    //                 name: 'Mike'
    //              }
    //     })  //since we are not providing any callback thus by default of this method promise will be returned
    //     updatePromise.then ((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // })

    //chaining the above commands
    // db.collection('users').updateOne(
    //     {
    //         _id: new ObjectID("5e1706ba74f65f2384fb19a9")
    //     },
    //     {
    //              $set: 
    //              {  //update operator
    //                 name: 'Yash'
    //              }
    //     }).then ((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // })


    db.collection('tasks').updateMany (
        {
            completed: false
        },
        {
                 $set: 
                 {  //update operator
                    completed: true
                 }
        }).then ((result) => {
            console.log(result.modifiedCount)
        }).catch((error) => {
            console.log(error)
        })
    })


