const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    Services: {
        type:String,
        require: true,
    },
});

module.exports = mongoose.model('Services',serviceSchema,'services')