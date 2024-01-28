const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
        , required: true
    },
    image: {
        type: String
        , required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const adminData = mongoose.model('adminData',adminSchema);

module.exports = adminData;