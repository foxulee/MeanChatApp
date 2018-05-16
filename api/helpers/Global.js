const mongoose = require('mongoose');
const User = mongoose.model('User');

class Global {
    constructor() {
        this.globalGroup = [];
    }

    enterGroup(socketId, userId, username, group, img) {
        let user = {
            socketId: socketId,
            userId: userId,
            username: username,
            group: group,
            img: img
        };

        // make sure loggin user added to global group only once
        let isExist = false;
        for (let i = 0; i < this.globalGroup.length; i++) {
            if (this.globalGroup[i].userId == userId) {
                isExist = true;
                break;
            }
        }

        if (isExist) {
            return;
        } else {

            this.globalGroup.push(user);
            return user;
        }
    }

    removeUser(socketId) {
        let userFound = this.getUser(socketId);
        if (userFound)
            this.globalGroup = this.globalGroup.filter(user => user.socketId !== socketId);

        return userFound;
    }

    getUser(socketId) {
        return this.globalGroup.filter(user => user.socketId === socketId)[0];
    }

    getUserFriendList(userId) {
        let userFriendList = [];
        return User.findOne({
            '_id': userId
        }, {
            'friendList': 1
        }).exec((err, doc) => {
            userFriendList = doc.friendList;   
            return doc.friendList;        
        })

    }

    getUsersInfoList(group) {
        return this.globalGroup
            .filter(user => user.group === group)
            .map(user => {
                return {
                    id: user.userId,
                    name: user.username,
                    'img': user.img
                }
            });
    }
}

module.exports = {
    Global
};