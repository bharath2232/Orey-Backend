const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
   

    bio: {
        type:String,
        require: true,
    },
    userId: {
        type:String,
        require: true,
    },
    name: {
        type:String,
        require: true,
    },
    photo: {
        type:String,
        require: true,
    },
    area: {
        type:String,
        require: true,
    },
    service: {
        type:String,
        require: true,
    },
    available: {
        type:String,
        require: true,
    },
    date: {
        type:Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Employee',employeeSchema)