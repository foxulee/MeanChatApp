const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: {
        type: String
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    senderName: {
        type: String
    },
    receiverName: {
        type: String
    },
    userImage: {
        type: String,
        default: 'defaultPic.png'
    },
    isRead: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});


mongoose.model('Message', messageSchema);