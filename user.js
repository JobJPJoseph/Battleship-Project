const Player = require('./player');
const CPU = require('./cpu');

class Users {
    constructor(readline) {
        this.player = new Player(readline);
        this.cpu = new CPU(readline);

        this.turn = [this.player, this.cpu];
    }

    rotateTurn() {
        [this.turn[0], this.turn[1]] = [this.turn[1], this.turn[0]];
        return true;
    }

    currentPlayer() {
        return this.turn[0];
    }
}

module.exports = Users;
