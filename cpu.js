// const Board = require('./board');

class ComputerPlayer {
    // constructor() {}

    // async getCoordinate(availablePositions) {

    //     return new Promise((resolve) => {
    //         const randomNumber = Math.floor(Math.random() * availablePositions.length);
    //         const coordinate = availablePositions[randomNumber];
    //         resolve(coordinate);
    //     });

    // }

    constructor(object) {
        this.board = object;
    }

}

// const cpu = new CPU();

// const available = [
//     [0, 0], [0, 1], [0, 2]
// ];

// async function getInput() {
//     return await cpu.getCoordinate(available);
// }

// // You need to use await when calling the async function
// async function main() {
//     const input = await getInput();
//     console.log(input);
// }

// main();

module.exports = ComputerPlayer;
