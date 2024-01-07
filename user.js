const Player = require('./player');
const CPU = require('./cpu');

class Users {
    constructor() {
        this.readline = require('readline');
        this.player = new Player(this.readline);
        this.cpu = new CPU(this.readline);

        this.turn = [this.player, this.cpu];
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

        const currentPlayer = this.currentTurn();
        const input = await currentPlayer.getCoordinate(availablePositions);
        this.rotateTurn();
        return input;
    }

}

// const user = new Users();

// const availablePositions = [
//     [0, 0], [0, 1], [0, 2],
//     [1, 0], [1, 1], [1, 2],
//     [2, 0], [2, 1], [2, 2]
// ];

// async function start() {
//     const inputs = [];

//     for (let i = 0; i < 4; i++) {
//         let input = await user.getInput(availablePositions);
//         console.log(input);
//         inputs.push(input);
//     }

//     console.log(inputs);
//     return inputs;
// }

// async function run() {
//     const result = await start();
//     console.log(result);
// }

// run();

module.exports = Users;
