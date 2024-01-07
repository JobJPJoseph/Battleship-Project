const Users = require('./user');

class Board extends Users {
    constructor(n) {
        super();
        this.width = n;
        this.size = (this.width * this.width);
        this.grid = [];
        // Fill the grid instance
        for (let i = 0; i < this.width; i++) {
            const row = [];

            for (let i = 0; i < this.width; i++) {
                row.push("N");
            }

            this.grid.push(row);
        }

    }

    static GRID = [];

    // Fill the class grid
    static fillActualGrid(n) {

        for (let i = 0; i < n; i++) {
            const row = [];

            for (let i = 0; i < n; i++) {
                row.push("N");
            }

            Board.GRID.push(row);
        }

        return true;
    }

    static enemyShips(grid) {
        // We changed to static
        // Find the the amount that 25% equates to
        let numberOfShips = this.twentyFivePercent(grid);
        // Now we need to get a random number for row and column
        return this.placeEnemyShips(numberOfShips, grid);
    }

    static twentyFivePercent(grid) {
        const gridLength = grid[0].length;
        const gridWidth = grid[0].length;
        const size = (gridLength * gridWidth);

        return Math.floor(size * 0.25);
    }

    static placeEnemyShips(numberOfShips, grid) {

        while(numberOfShips > 0) {
            let row = Math.floor(Math.random() * grid[0].length);
            let column = Math.floor(Math.random() * grid[0].length);
            if (grid[row][column] !== 'S') {
                grid[row][column] = 'S';
                numberOfShips--;
            }
        }

        return true;
    }

    static attackPlayer(coordinates, promptedGrid, actualGrid) {
        /* The goal here is to test the coordinates against the actualGrid
                if true, that we hit a ship:
                    we would change said position inside of actualGrid and prompted to "H"
                if false, that we miss a ship
                    we will change said position inside of acutalGrid and promted to "X"

        */

        if(this.getPosition(coordinates) === "S") {
            this.setPosition(coordinates, "H", promptedGrid);
            this.setPosition(coordinates, "H", actualGrid);
        } else { // Note: availablePositions picks up only "N". The else is an "N"
            this.setPosition(coordinates, "X", promptedGrid);
            this.setPosition(coordinates, "X", actualGrid);
        }

        return true;
    }

    static setPosition(position, char, grid) {
        grid[position[0]][position[1]] = char;
        return true;
    }

    static getPosition(position) {
        return Board.GRID[position[0]][position[1]];
    }

    static availableCoordinates(actualGrid) {
        /*
            We will be refering to Board.GRID not board.grid
            We will be return the value at said position.
        */

        const availablePositions = [];

        for (let row = 0; row < actualGrid.length; row++) {

            for (let column = 0; column < actualGrid[0].length; column++) {

                if ((this.getPosition([row, column]) === "N") || (this.getPosition([row, column]) === "S")) {
                    availablePositions.push([row, column]);
                }

            }

        }

        return availablePositions;
    }

    static countOfShips() {
        let initial = 0;
        const twoDArray = this.flatten();
        twoDArray.reduce((accum, elem) => {
            if (elem === "S") initial++;
        }, initial);

        return initial
    }

    static flatten() {
        return Board.GRID.reduce((flatArray, subArray) => flatArray.concat(subArray, []));
    }

    static printGrid(grid) {
        const formatGrid = grid.map(function (row) {
            return row.join(" | ");
        }).join("\n" + (" ") + "\n");

        return formatGrid;
    }

    gameState() {

    }

}

const board = new Board(9);
Board.fillActualGrid(board.width);

console.log(Board.printGrid(Board.GRID));
console.log("=================================");

console.log(Board.availableCoordinates(Board.GRID));
console.log(Board.getPosition([0, 0]));
console.log(Board.setPosition([0, 0], "H", Board.GRID))

console.log(Board.printGrid(Board.GRID));
console.log("=================================");
console.log(Board.availableCoordinates(Board.GRID));

console.log(Board.enemyShips(Board.GRID));

console.log(Board.printGrid(Board.GRID));
console.log("=================================");
console.log(Board.availableCoordinates(Board.GRID));

console.log(Board.flatten());
console.log(Board.countOfShips());
module.exports = Board;
