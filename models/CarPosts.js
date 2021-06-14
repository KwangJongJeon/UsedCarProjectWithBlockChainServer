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
    
    title: {
        type: String,
        required: true
    },
    
    description: {
        type: String
    },

    blockChainAddress: {
        type: String,
        required: true
    },

    isInitialInspected: {
        type: Boolean,
        default: false
    },

    supplyState: {
        type: String,
        default: "Created"
    },

    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = CarPost = mongoose.model('carPost', CarPostSchema);