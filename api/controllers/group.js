const mongoose = require('mongoose');
const User = mongoose.model('User');
const GroupMessage = mongoose.model('GroupMessage');
const async = require('async');

module.exports.getUser = function (req, res) {
    const userId = req.params.id;
    async.parallel([
        function (callback) {
            User.findOne({
                    '_id': userId
                })
                .populate('request.id')
                .exec((err, result) => {
                    callback(err, result);
                })
        }
    ], (err, results) => {
        let user = results[0];

        res.status(200).json(user);
    })
};

module.exports.getAllGroupMessages = function (req, res) {

    console.log('group', req.params.group);
    let group = req.params.group;
    GroupMessage.find({
            'group': group
        }).populate('senderId')
        .exec((err, results) => {
            if (err) res.status(500).json();
            else {
                if (!results || results.length == 0) res.status(200).json(results);
                else {
                    results.map(result => {
                        return {
                            _id: result._id,
                            message: result.message,
                            senderId: result.senderId._id,
                            senderName: result.senderName,
                            createAt: result.createAt,
                            userImage: result.senderId.userImage
                        }
                    })
                    res.status(200).json(results);
                }
            }
        });
}

module.exports.saveGroupMessage = function (req, res) {

    let newGroupMessage = new GroupMessage();
    newGroupMessage.senderId = req.body.from.id;
    newGroupMessage.senderName = req.body.from.name;
    newGroupMessage.group = req.body.group;
    newGroupMessage.message = req.body.content;
    newGroupMessage.createAt = new Date();

    newGroupMessage.save((err, result) => {

        if (err) res.status(500).json();
        else res.status(200).json();
    })
}

module.exports.friendRequest = function (req, res) {
    // console.log('req.body', req.body)
    let senderName = req.body.sender.name;
    let senderId = req.body.sender.id;
    let receiverName = req.body.receiver;
    async.parallel([
        // for the receiver
        function (callback) {
            if (receiverName) {
                User.update({
                    'name': receiverName,
                    'request.id': {
                        $ne: senderId
                    },
                    'friendList.id': {
                        $ne: senderId
                    }
                }, {
                    $push: {
                        request: {
                            id: senderId,
                            name: senderName
                        }
                    },
                    $inc: {
                        totalRequest: 1
                    }
                }, (err, count) => {
                    callback(err, count);
                })
            }
        },

        // for the sender
        function (callback) {
            if (receiverName) {
                User.update({
                    'name': senderName,
                    'sentRequest.name': {
                        $ne: receiverName
                    }
                }, {
                    $push: {
                        sentRequest: {
                            name: receiverName
                        }
                    }
                }, (err, count) => {
                    callback(err, count);
                })
            }
        }
    ], (err, results) => {
        res.status(200).json();
    });
}

module.exports.acceptRequest = function (req, res) {
    let senderId = req.body.senderId;
    let senderName = req.body.senderName;
    let userId = req.body.userId;
    let userName = req.body.userName;

    async.parallel([
        // update for the receiver (current user)
        function (callback) {
            if (userId) {
                User.update({
                        // condition
                        '_id': userId, // find userId
                        'friendList.id': {
                            $ne: senderId // friendList not containing senderId
                        }
                    }, {
                        $push: { // add sender to friendList
                            friendList: {
                                id: senderId,
                                name: senderName
                            }
                        },
                        $pull: { // remove sender out of requestList
                            request: {
                                id: senderId,
                                name: senderName
                            }
                        }, // decrement totalRequest
                        $inc: {
                            totalRequest: -1
                        }
                    },
                    (err, count) => {
                        callback(err, count);
                    }
                )
            }
        },

        // update for the sender
        function (callback) {
            if (userId) {
                User.update({
                        // condition
                        '_id': senderId, // find senderid
                        'friendList.id': {
                            $ne: userId // friendList not containing userId
                        }
                    }, {
                        $push: { // add current user to sender's friendList
                            friendList: {
                                id: userId,
                                name: userName
                            }
                        },
                        $pull: { // remove current user out of sender's sentRequest list
                            sentRequest: {
                                name: userName
                            }
                        }
                    },
                    (err, count) => {
                        callback(err, count);
                    }
                )
            }
        }
    ], (err, results) => {
        res.status(200).json();
    });
}


module.exports.cancelRequest = function (req, res) {
    let senderId = req.body.senderId;
    let senderName = req.body.senderName;
    let userId = req.body.userId;
    let userName = req.body.userName;

    console.log(req.body);


    async.parallel([
        // update for the receiver (current user)
        function (callback) {
            if (userId) {
                User.update({
                        // condition
                        '_id': userId, // find userId
                        'request.id': {
                            $eq: senderId
                        } // if current sender id exits in request list
                    }, {
                        $pull: { // remove sender out of requestList
                            request: {
                                id: senderId,
                                name: senderName
                            }
                        }, // decrement totalRequest
                        $inc: {
                            totalRequest: -1
                        }
                    },
                    (err, count) => {
                        callback(err, count);
                    }
                )
            }
        },

        // update for the sender
        function (callback) {
            if (userId) {
                User.update({
                        // condition
                        '_id': senderId, // find senderid
                        'sentRequest.name': {
                            $eq: userName
                        } // if userName exits in sentRequest
                    }, {
                        $pull: { // remove current user out of sender's sentRequest list
                            sentRequest: {
                                name: userName
                            }
                        }
                    },
                    (err, count) => {
                        callback(err, count);
                    }
                )
            }
        }
    ], (err, results) => {
        res.status(200).json();
    });
}

module.exports.getFriendList = function (req, res) {
    let userId = req.params.id;
    User.findOne({
        '_id': userId
    }, {
        'friendList': 1
    }).exec((err, doc) => {
        userFriendList = doc.friendList;
        res.status(200).json(doc.friendList);
    })
}