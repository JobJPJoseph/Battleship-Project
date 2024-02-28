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

    getPlayerShips() {
        const grid = [];

        for (let i = 6; i < 9; i++) {
            const row = this.board.actualGrid[i];

            for (let j = 0; j < row.length; j++) {
                const cell = row[j];

                if ((cell === "S")) grid.push( { row: i, column: j } );
            }

        }

        return grid;
    }

    getRandomPlayerShip() {
        const coordinates = this.getPlayerShips(); // does grab Ships
        const index = Math.floor(Math.random() * coordinates.length);
        return coordinates[index];
    }

    exeCheatEngine() {
        const chance = Math.floor(Math.random() * 2);
        return (chance) ? true : false;
    }

    getRandomAvailablePosition() {
        const coordinate = this.board.availableCoordinates(6, 9); // does not grab Ships
        const index = Math.floor(Math.random() * coordinate.length);
        return coordinate[index];
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
