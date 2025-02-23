const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    timestamp : Number,
    coords : {
        latitude : Number,
        longitude : Number,
        altitude : Number,
        accuracy : Number,
        heading : Number,
        speed : Number
    }
});

const trackSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    name : {
        type : String,
        default : ''
    },
    locations : [pointSchema]
});

// all the point objects are embeeded inside of trackSchema so we only have a collection of track objects so we only loading up Track into mongoose 

mongoose.model('Track' , trackSchema);