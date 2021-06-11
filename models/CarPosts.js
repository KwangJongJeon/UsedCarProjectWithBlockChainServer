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

    carNum: {
        type: String,
        required: true,
    },

    carPrice: {
        type: String,
        required: true
    },

    carImg: {
       data: Buffer,
        type: String
    },
    
    description: {
        type: String
    },

    IsInitialInspected: {
        type: Boolean,
        default: false
    },

    BlockChainAddress: {
        type: String,
        required: true
    },

    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = CarPost = mongoose.model('carPost', CarPostSchema);