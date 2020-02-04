const mongoose = require('mongoose')
const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api' // has db name in connection string

mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex:true //ensures when mongoose works with mongo db  indexes are created so as to quickly access data we need
})





