class CPU {
    constructor(rl) {
        this.rl = rl;
    }

    getCoordinate(availablePositions) {
        const randomNumber = Math.floor(Math.random() * availablePositions.length);
        const coordinate = availablePositions[randomNumber];
        return coordinate;
    }

}

const readline = require('readline');

const cpu = new CPU(readline);

const allCoordinates = [
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]
];

function run() {
    const result = cpu.getCoordinate(allCoordinates);
    console.log(result);
}

run();
module.exports = CPU;
