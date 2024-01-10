const mongoose = require('mongoose')

// Creating Schema for Subscribers
const subscribers = new mongoose.Schema({

    email:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

// Model function takes two parameters 1.Collection Name   2.Collection Schema
module.exports = mongoose.model('Subscribers',subscribers)