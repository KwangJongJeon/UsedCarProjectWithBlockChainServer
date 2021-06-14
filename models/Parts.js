const mongoose = require('mongoose');

const PartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = Part = mongoose.model('part', PartSchema);