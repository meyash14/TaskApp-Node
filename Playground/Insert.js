//CRUD
 const mongodb = require('mongodb')
 const MongoClient = mongodb.MongoClient

 const connectionURL = 'mongodb://127.0.0.1:27017'
 const databaseName = 'task-manager'

 MongoClient.connect(connectionURL,{useNewUrlParser: true,useUnifiedTopology: true},(error,client)=>{
        if(error)
        {
            return console.log('Unable to Connect')
        }
         const db = client.db(databaseName)  //Initialise db no need to create

        //  db.collection('users').insertOne({
        //      name: 'Yash',
        //      age: 27
        //  },(error,result) => {
        //             if(error)
        //             {
        //                 return console.log("Unable to Insert")
        //             }
        //             console.log(result.ops)
        //  })

        db.collection('users').insertMany([
            {
            name: 'AB',
            age:24 
            },
            {
                name: 'Je',
                age: 25
            }

        ],(error,result) => {
            if(error)
            {
                return console.log('Unable to Insert')
            }
            console.log(result.ops)
        })

    

        
 })