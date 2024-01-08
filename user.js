const Player = require('./player');
// const CPU = require('./cpu');

class Users {
    constructor() {
        // this.readline = require('readline');
        this.player = new Player();
        // this.cpu = new CPU(this.readline);

        // this.turn = [this.player, this.cpu];
    }

    rotateTurn() {
        [this.turn[0], this.turn[1]] = [this.turn[1], this.turn[0]];
        return true;
    }

    currentTurn() {
        return this.turn[0];
    }

    async getInput(availablePositions) {
        // We this is called it will return the input
        // each call will switch or rotate this.turn

        // const currentPlayer = this.currentTurn();
        // const input = await currentPlayer.getCoordinate(availablePositions);
        const input = await this.player.getCoordinate(availablePositions);
        // this.rotateTurn();
        return input;
    }

}

module.exports = Users;
