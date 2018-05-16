module.exports = function (io, Users) {

    // UserClass.js
    const users = new Users();

    io.on('connection', (socket) => {
        console.log('User Connected');

        socket.on('join', (param) => {
            // console.log(param);
            socket.join(param.group);

            users.addUserData(socket.id, param.name, param.group, param.userId, param.image);
            // console.log(users);

            io.to(param.group).emit('online group users', users.getUsersNameList(param.group));

        })

        socket.on('group message', (msg) => {
            // console.log(msg);
            io.to(msg.group).emit('group message', msg)
        })

        socket.on('leave group', () => {
            let user = users.removeUser(socket.id);
            if (user) {
                io.to(user.group).emit('online group users', users.getUsersNameList(user.group));
            }
        });

        socket.on('disconnect', () => {
            let user = users.removeUser(socket.id);
            if (user) {
                io.to(user.group).emit('online group users', users.getUsersNameList(user.group));
            }
        });
    });

    io.on('disconnect', (socket) => {
        console.log('User Disconnected');
    })
}