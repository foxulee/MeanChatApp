const mongoose = require('mongoose');
const Message = mongoose.model('Message');
const User = mongoose.model('User');
const async = require('async');

module.exports.saveChatMessage = function (req, res) {
    // console.log(req.body);
    message = req.body.content;
    senderId = req.body.from.id;
    senderName = req.body.from.name;
    receiverId = req.body.to.id;
    receiverName = req.body.to.name;
    senderImage = req.body.senderImage;

    if (message) {
        const newMsg = new Message();
        newMsg.senderId = senderId;
        newMsg.senderName = senderName;
        newMsg.receiverId = receiverId;
        newMsg.receiverName = receiverName;
        newMsg.userImage = senderImage;
        newMsg.message = message;
        newMsg.createAt = new Date();

        newMsg.save((err, result) => {
            if (err) res.status(500).json();
            console.log(result);
            res.status(200).json();
        })
    }
}

module.exports.getUnreadMessages = function (req, res) {
    let userId = req.params.userId;
    // console.log('userId', userId);

    Message.aggregate([{
            $match: {
                receiverId: new mongoose.Types.ObjectId(userId)
            }
        },
        {
            $sort: {
                createAt: -1
            }
        },
        {
            $group: {
                '_id': '$senderId',
                'latest-message': {
                    $first: '$$ROOT'
                }
            }
        }
    ], (err, result) => {
        // console.log('result from aggre', result);
        // result console.log(): 
        // [ { _id: 5ae7814d3742a62b208c68be,
        //     [0]     'latest-message':
        //     [0]      { _id: 5aed0a9213f5a6228c50f87d,
        //     [0]        message: 'sfadfasdf',
        //     [0]        receiverName: 'Fox',
        //     [0]        receiverId: 5ae7811d3742a62b208c68bd,
        //     [0]        senderName: 'Fish',
        //     [0]        senderId: 5ae7814d3742a62b208c68be,
        //     [0]        createAt: 2018-05-05T01:36:18.285Z,
        //     [0]        isRead: false,
        //     [0]        userImage: 'default.png',
        //     [0]        __v: 0 } } ]
        res.status(200).json(result);
    });
}

module.exports.getAllMessages = function (req, res) {
    let senderId = req.query.senderId;
    let receiverId = req.query.receiverId;

    Message.find({
        '$or': [{
            'senderId': new mongoose.Types.ObjectId(senderId),
            'receiverId': new mongoose.Types.ObjectId(receiverId)
        }, {
            'receiverId': new mongoose.Types.ObjectId(senderId),
            'senderId': new mongoose.Types.ObjectId(receiverId)
        }]
    }, (err, result) => {
        res.status(200).json(result);
    })
}

module.exports.readLastMessage = function (req, res) {
    console.log(req.body.lastUnreadMessageId);
    let lastUnreadMessageId = req.body.lastUnreadMessageId;
    if (lastUnreadMessageId) {
        Message.update({
            '_id': lastUnreadMessageId
        }, {
            'isRead': true
        }, (err, result) => {
            console.log('err', err);
            
            if (err) res.status(500).json();
            res.status(200).json()
        });
    }
}