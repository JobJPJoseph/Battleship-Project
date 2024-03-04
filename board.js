class Board {
    constructor(n) {
        this.actualGrid = [];
        this.promptedGrid = [];

        for(let i = 0; i < n; i++) {
            this.actualGrid.push(new Array(n).fill(' '));
            this.promptedGrid.push(new Array(n).fill('N'));
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
            const coordinates = this.availableCoordinates(min, max);
            const index = Math.floor(Math.random() * coordinates.length);
            const coordinate = coordinates[index];
            this.actualGrid[coordinate.row][coordinate.column] = "S";
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

    printGrid() { // promptedGrid
        this.portion(0, 3);
        this.addWater();

        console.log()
        console.log()

        this.spaceBetween(3, 6);

        console.log()
        console.log()

        this.portion(6, 9);
    }

    portion(min, max) {
        const ships = this.range(min, max);

        console.log(ships.map(row => row.join(" | ")).join('\n' + '_________________________________' + '\n'));
    }

    spaceBetween(min, max) {
        const water = this.range(min, max);

        console.log(water.map(row => row.join(" | ")).join('\n' + '_________________________________' + '\n'));
    }

    addWater() {

        for (let i = 3; i < 6; i++) {
            const row = this.promptedGrid[i];

            for (let k = 0; k < row.length; k++) {
                row[k] = "~";
            }

        }

    }

    range(min, max) {
        const arr = [];

        for(let i = min; i < max; i++) {
            const row = this.promptedGrid[i];
            arr.push(row);
        }

        return arr;
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
