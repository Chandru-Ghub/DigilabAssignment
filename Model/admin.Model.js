const mongoose = require('mongoose')

// c=Creating schema for layout design
const layoutDesign = new mongoose.Schema({

         title:{
            type:String,
            requird:true,
         },
         buttonTxt:{
            type:String,
            required:true,
         },
         logoImg:{
            type:String,
            required:true,
        }   
},{
    timestamps:true
})

module.exports = mongoose.model('CustomizePage',layoutDesign)