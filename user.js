const Player = require('./player');
// const CPU = require('./cpu');

class Users {
    constructor(rl) {
        this.player = new Player(rl);
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
        // const currentPlayer = this.currentTurn();
        // const input = await currentPlayer.getCoordinate(availablePositions);
        const input = await this.player.getCoordinate(availablePositions);
        // this.rotateTurn();
        return input;
    }

}

module.exports = Users;
