const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = function (io, Global) {
    const globalGroup = new Global();

    io.on('connection', (socket) => {

        socket.on('global group', (data) => {
            console.log('data', data)
            socket.join(data.group);
            if (data.id) {
                globalGroup.enterGroup(socket.id, data.id, data.name, data.group, data.img);
            }

            let onlineUserInfoList = globalGroup.getUsersInfoList(data.group);
            console.log('onlineUserInfoList', onlineUserInfoList);

            io.to(data.group).emit('online friends', onlineUserInfoList);
        });

        socket.on('disconnect', () => {
            let user = globalGroup.removeUser(socket.id);

            if (user) {
                let onlineUserInfoList = globalGroup.getUsersInfoList(user.group);
                console.log('onlineUserInfoList', onlineUserInfoList);

                io.to(user.group).emit('online friends', onlineUserInfoList);
            }
        })
    });


}