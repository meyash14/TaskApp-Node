const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser: true,useUnifiedTopology: true},(error,client)=>{
    if(error)
    {
        return console.log('Unable to Connect')
    }
     const db = client.db(databaseName)
     db.collection('users').deleteMany({name:'Yash'}).then((result) => {
        console.log(result)
     }).catch((error) => {
        console.log(error)
     })
})