class Users {
    constructor() {
        this.users = [];
    }

    addUserData(socketId, name, group, id, image) {
        let user = {
            socketId,
            name,
            group,
            id
        };
        this.users.push(user);
        return user;
    } 

    removeUser(socketId) {
        let userFound = this.getUser(socketId);
        if (userFound)
            this.users = this.users.filter(user => user.socketId !== socketId);

        return userFound;
    }

    getUser(socketId) {
        return this.users.filter(user => user.socketId === socketId)[0];
    }

    getUsersNameList(group) {
        return this.users
            .filter((user) => user.group === group)
            .map(user => {return {name: user.name, id: user.id}});
    }
}

module.exports = {
    Users
};