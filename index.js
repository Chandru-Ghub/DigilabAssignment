const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const app = express()
const cors = require('cors')
const connectDB = require('./Database/configueDB')
const subsRoute = require('./Router/subscribers.Router')
const authRoute = require('./Router/auth.Router')
const adminRoute = require('./Router/admin.Router')
// middleWares
app.use(cors())
app.use(express.json())

// API endpoint
app.use('/api',subsRoute)
app.use('/api',authRoute)
app.use('/api',adminRoute)

// landing page 
app.get('/',(req,res)=>{
    res.send("Welcome to Mode UI....")
})

// Creating server using express JS
app.listen(port,(err)=>{
    if(err) return console.log('Internal error!')
    console.log('Server running on port '+ port)
})

// Connection to the mongoDB DataBase
connectDB()