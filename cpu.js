class ComputerPlayer {
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
        const coordinates = this.getPlayerShips();
        const index = Math.floor(Math.random() * coordinates.length);
        return coordinates[index];
    }

    exeCheatEngine() {
        const chance = Math.floor(Math.random() * 2);
        return (chance) ? true : false;
    }

    getRandomAvailablePosition() {
        const coordinate = this.board.availableCoordinates(6, 9);
        const index = Math.floor(Math.random() * coordinate.length);
        return coordinate[index];
    }

    getValidPosition() {

        if(this.exeCheatEngine()) {
            return this.getRandomPlayerShip();
        } else {
            return this.getRandomAvailablePosition();
        }

    }

}

module.exports = ComputerPlayer;
