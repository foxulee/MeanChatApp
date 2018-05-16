module.exports = function (io, Users) {
    io.on('connection', (socket) => {
        socket.on('private-room', (params) => {
            socket.join(params.room1);
            socket.join(params.room2);
        });

        socket.on('private message send', (data) => {
            let group = data.group;
            delete data.group;
            io.to(group).emit('private message receive', data)
            
            io.emit('new private message notification', {});
        })
    })


}