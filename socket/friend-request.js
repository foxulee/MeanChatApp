const mongoose = require('mongoose');
const User = mongoose.model('User');

const userList = {};

module.exports = function (io) {
    io.on('connection', (socket) => {
        socket.on('joinNotificationList', name => {
            userList[name] = socket.id;
            // console.log('userList', userList)
        })

        socket.on('joinRequest', (params) => {
            socket.join(params.sender.name);
        });

        socket.on('friendRequest send', (params) => {
            // console.log('params', params)
            io.to(params.sender.name).emit('friendRequest send', params);

            io.to(userList[params.receiver]).emit('friendRequest receive', {
                from: params.sender,
                to: params.receiver
            });
        });

        socket.on('disconnect', (socket) => {
            for (var property in userList) {
                if (userList.hasOwnProperty(property)) {
                    if (userList[property] === socket.id) {
                        delete userList[property];
                        break;
                    }
                }
            }
        })
    })
}