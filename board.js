const { Screen } = require('./screen')

class Board {
    constructor(n) {
        // this.actualGrid = [];
        // this.promptedGrid = [];

        // for(let i = 0; i < n; i++) {
        //     this.actualGrid.push(new Array(n).fill(' '));
        //     this.promptedGrid.push(new Array(n).fill('N'));
        // }

        if (!Screen.isInitialized) {
            Screen.initialize(n);
        }

    }

    availableCoordinates(min, max) {
        const grid = [];

        for (let i = min; i < max; i++) {
            const row = this.actualGrid[i];

            for (let j = 0; j < row.length; j++) {
                const cell = row[j];

                if ((cell !== "S")) grid.push( { row: i, column: j } )
            }

        }

        return grid;
    }

    fillShips(min, max) {
        let count = 10;

        while (count > 0) {
            // const coordinates = this.availableCoordinates(min, max);
            const coordinates = this.availableCoordinates.call(Screen, min, max);
            const index = Math.floor(Math.random() * coordinates.length);
            const coordinate = coordinates[index];
            // this.actualGrid[coordinate.row][coordinate.column] = "S";
            Screen.actualGrid[coordinate.row][coordinate.column] = "S";
            count--;
        }

        return;
    }

    attackShip(coordinateObj) {
        const { row, column } = coordinateObj;

        if(this.actualGrid[row][column] === "S") {
            // A hit
            this.promptedGrid[row][column] = "H";
            this.actualGrid[row][column] = "H";
        } else {
            // A miss
            this.promptedGrid[row][column] = "X";
            this.actualGrid[row][column] = "X";
        }

    }

    remainingShips(min, max) {
        // const ships = this.range(min, max);
        const range = (min, max) => {
            const arr = [];

            for(let i = min; i < max; i++) {
                const row = this.actualGrid[i];
                arr.push(row);
            }

            return arr;
        }

        const ships = range(min, max);

        let count = 0;

        for (let i = 0; i < ships.length; i++) {
            const arrShip = ships[i];

            arrShip.forEach(elem => {
                if(elem === "S") count++;
            });

        }

        return count;
    }

}

module.exports = Board;
