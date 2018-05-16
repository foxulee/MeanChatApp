const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: 'default.png'
    },
    fans: [{
        username: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        }
    }],
})

mongoose.model('Club', clubSchema);