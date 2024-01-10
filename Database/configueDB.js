const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// dotenv.config()
const url = process.env.MONGODB_URI
const connectDB = async()=>{
        try {
            const connection = await mongoose.connect(url)
            console.log('MongoDB DataBase connected sucessfully.....!')
            return connection
        } catch (error) {
            console.log(error)
        }
}

module.exports = connectDB