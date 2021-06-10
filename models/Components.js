const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = Component = mongoose.model('component', ComponentSchema);