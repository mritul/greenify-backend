const mongoose = require("mongoose")

const website = new mongoose.Schema({
    initiator:{
        type:String,
        required:true,
    },
    bytes:{
        type:Number,
        required:true,
    },
    emissions:{
        type:Number,
        required:true
    },
    userID:{
        type:ObjectId
    }
})

module.exports = new mongoose.model("Website",website)