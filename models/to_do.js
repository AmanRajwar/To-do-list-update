const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    description: {
        type: 'string',
        required: true
    },
    category: {
        type: 'string',
        required: true
    },
    date:{
        type: 'string',
        required: true
    }
})

const tasksModel = mongoose.model('tasksModel', tasksSchema);

module.exports = tasksModel;