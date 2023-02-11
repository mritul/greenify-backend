const mongoose = require("mongoose")

const website = new mongoose.Schema({
    initiator:{
        type:String,
        required:true,
    },
    bytes:{
        type:[Number],
        required:true,
    },
    visitTimes:[DateTime],
    emissions:{
        type:Number,
        required:true
    },
    userID:{
        type:ObjectId
    }
})

module.exports = new mongoose.model("Website",website)