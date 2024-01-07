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
    static fillClassGrid(n) {

        for (let i = 0; i < n; i++) {
            const row = [];

            for (let i = 0; i < n; i++) {
                row.push("-");
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

    static attackPlayer(actualGrid, promptedGrid, coordinates) {

    }

    static printGrid(grid) {
        const formatGrid = grid.map(function (row) {
            return row.join(" | ");
        }).join("\n" + (" ") + "\n");

        return formatGrid;
    }

}
const board = new Board(9);
Board.fillClassGrid(board.width);
Board.fillBoard(Board.GRID);
console.log(Board.printGrid(board.grid));
console.log(Board.printGrid(Board.GRID));

module.exports = Board;
