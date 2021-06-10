const mongoose = require('mongoose');

const CarPostSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    carImg: {
        data: buffer,
        contentType: String
    }
});

module.exports = CarPost = mongoose.model('carPost', CarPostSchema);