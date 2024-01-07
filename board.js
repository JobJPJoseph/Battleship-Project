const Users = require('./user');

class Board extends Users {
    constructor(n) {
        super();
        this.width = n;
        this.size = (this.width * this.width);
        this.promptedGrid = this.fillGrid();
        this.actualGrid = this.actualGrid();
        this.fillActualGrid();
        // Fill the grid instance
        // for (let i = 0; i < this.width; i++) {
        //     const row = [];

        //     for (let i = 0; i < this.width; i++) {
        //         row.push("N");
        //     }

        //     this.grid.push(row);
        // }

    }

    fillGrid() {
        const grid = [];
        for (let i = 0; i < this.width; i++) {
            const row = Array(this.width).fill("N");
            grid.push(row);
        }

        return grid;
    }
    // static GRID = [];

    // Fill the class grid
    // static fillActualGrid(n) {

    //     for (let i = 0; i < n; i++) {
    //         const row = [];

    //         for (let i = 0; i < n; i++) {
    //             row.push("N");
    //         }

    //         Board.GRID.push(row);
    //     }

    //     return true;
    // }

    fillActualGrid() {
        const numberOfShips = Math.floor(this.size * 0.25);
        this.placeEnemyShips(numberOfShips, this.actualGrid)
    }

    // static enemyShips(grid) {
    //     // We changed to static
    //     // Find the the amount that 25% equates to
    //     let numberOfShips = this.twentyFivePercent(grid);
    //     // Now we need to get a random number for row and column
    //     return this.placeEnemyShips(numberOfShips, grid);
    // }

    // static twentyFivePercent(grid) {
    //     const gridLength = grid[0].length;
    //     const gridWidth = grid[0].length;
    //     const size = (gridLength * gridWidth);

    //     return Math.floor(size * 0.25);
    // }

    placeEnemyShips(numberOfShips, grid) {

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

    attackPlayer(coordinates, promptedGrid, actualGrid) {
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

    setPosition(position, char, grid) {
        grid[position[0]][position[1]] = char;
        return true;
    }

    getPosition(position) {
        return this.actualGrid[position[0]][position[1]];
    }

    availableCoordinates() {
        const availablePositions = [];

        for (let row = 0; row < this.grid.length; row++) {
            for (let column = 0; column < this.grid[0].length; column++) {
                const position = this.getPosition([row, column]);
                if (position === "N" || position === "S") {
                    availablePositions.push([row, column]);
                }
            }
        }

        return availablePositions;
    }

    // static countOfShips() {
    //     let initial = 0;
    //     const twoDArray = this.flatten();
    //     twoDArray.reduce((accum, elem) => {
    //         if (elem === "S") initial++;
    //     }, initial);

    //     return initial
    // }

    countOfShips() {
        return this.flatten().filter((elem) => elem === "S").length; // interesting way to get the count of something
    }

    flatten() {
        return this.actualGrid.reduce((flatArray, subArray) => flatArray.concat(subArray, []));
    }

    printGrid(grid) {
        const formatGrid = grid.map(function (row) {
            return row.join(" | ");
        }).join("\n" + (" ") + "\n");

        return formatGrid;
    }

    printPromptedGrid() {
        return this.printGrid(this.promptedGrid);
    }

    printActualGrid() {
        return this.printGrid(this.actualGrid);
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
