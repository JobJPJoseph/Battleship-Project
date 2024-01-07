class CPU {
    constructor(rl = null) {
        this.rl = rl;
    }

    async getCoordinate(availablePositions) {
        return new Promise((resolve) => {
            const randomNumber = Math.floor(Math.random() * availablePositions.length);
            const coordinate = availablePositions[randomNumber];
            resolve(coordinate);
        });
    }

}

module.exports = CPU;
