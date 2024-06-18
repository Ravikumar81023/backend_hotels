const express = require('express')
const mongoose= require('mongoose')
const Menu= require('./models/Menu.js')
const body = require("body-parser")
const db = require('./db')
const bodyParser = require('body-parser')

const app=express()
app.use(bodyParser.json())

app.get('/',(req,resp)=>{
    resp.send("Success")
})


// Import the router files
const personRouter = require('./Routes/personRoutes.js')

//  use router
app.use('/person',personRouter)

// import the menu router
const menuRouter = require('./Routes/menuRoutes.js')
// use router
app.use('/menu',menuRouter)

app.listen(3000,()=>{
    console.log("Server started")
})


