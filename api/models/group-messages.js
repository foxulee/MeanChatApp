const mongoose = require('mongoose');

const groupMessageSchema = new mongoose.Schema({
    message: {
        type: String
    },
    
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
    senderName: {
        type: String
    },
    
    group: {
        type: String,
    },
    
    createAt: {
        type: Date,
        default: Date.now
    }
});


mongoose.model('GroupMessage', groupMessageSchema);