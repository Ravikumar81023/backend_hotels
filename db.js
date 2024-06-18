const mongoose= require('mongoose')

//  Define the MongoDB connection URL
// const dbURL="mongodb://localhost:27017/"

// Set up MongoDb connection
const db = mongoose.connect("mongodb://localhost:27017/",{
    dbName:"hotels",
}).then(()=>console.log("Database connected"))
    .catch((err)=>{
        console.log("ERROR")
    })

// Get the default connection
// Mongoose maintains a default connection object representing the mongodb connection.
// const db = mongoose.connection;

// define event listeners for datavase connection

// db.on('connected',()=>{
//     console.log('Connected to MongoDB server');
// })
// db.on('error',(err)=>{
//     console.log("Mongodb connection error :",err);
// })
// db.on('disconnected',()=>{
//     console.log('MongoDb disconnected')
// })

module.exports=db


