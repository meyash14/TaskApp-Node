//CRUD
//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient  //destructuring this
//const {MongoClient,ObjectID} = require('mongodb')
const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser: true,useUnifiedTopology: true},(error,client)=>{
    if(error)
    {
        return console.log('Unable to Connect')
    }
     const db = client.db(databaseName)
     //db.collection('users').findOne({ _id: new ObjectID("5e1706ba74f65f2384fb19a9")},(error,user) => {  //findOne gets the first document in case of multiple matches
    //  db.collection('users').find({age:26}).toArray((error,user) => {     //find method returns a cursor  
    //     if(error)
    //     {
    //         return console.log('Unable to find the document')
    //     }
    //     console.log(user) 
    //  })    
    
    //  db.collection('users').find({age:26}).count((error,user) => {     //find method returns a cursor  
    //     if(error)
    //     {
    //         return console.log('Unable to find the document')
    //     }
    //     console.log(user) 
    //  })   

    db.collection('tasks').findOne({_id: new ObjectID("5e181dbf2236fe1a389c5da1")},(error,user) => {
        if(error)
            {
                return console.log('Unable to find the document')
            }
            console.log(user) 
               
    })
    db.collection('tasks').find({completed:false}).toArray((error,user) => {     //find method returns a cursor  
            if(error)
            {
                return console.log('Unable to find the document')
            }
            console.log(user) 
         })   
})