const Users = require('./user');

class Board extends Users {
    constructor(n, rl) {
        super(rl);
        this.width = n;
        this.size = (this.width * this.width);
        this.promptedGrid = this.fillGrid();
        this.actualGrid = this.fillGrid();
        this.fillActualGrid();
    }

    fillGrid() {
        const arr = [];

        for (let i = 0; i < this.width; i++) {
            const subArray = [];

            for (let j = 0; j < this.width; j++) {
                subArray.push("N");
            }

            arr.push(subArray);
        }

        return arr;
    }

    fillActualGrid() {
        const numberOfShips = Math.floor(this.size * 0.25);
        this.placeEnemyShips(numberOfShips, this.actualGrid)
    }


    placeEnemyShips(numberOfShips, grid) {

        while(numberOfShips > 0) {
            let row = Math.floor(Math.random() * grid.length);
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

        for (let row = 0; row < this.actualGrid.length; row++) {
            for (let column = 0; column < this.actualGrid[0].length; column++) {
                const position = this.getPosition([row, column]);
                if (position === "N" || position === "S") {
                    availablePositions.push([row, column]);
                }
            }
        }

        return availablePositions;
    }

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

    async gameState() {

        while (this.countOfShips() > 0) {
            /*
            The first thing we are going to do is ask the player for the size of the board.
                We will use that value to initialize the board class.
            Next we will call board.gameState to run the game.

            In board class:
                We are going to call the gameState()
                    We are first going to call for availableCoordinates() so that the players
                    can choose what coordinates to attack.
                        let input = await this.getInput(this.availableCoordinates());

                    Now that we got an input from the player.
                    We will call attackPlayer(coordinates, promptedGrid, actualGrid);
                    This will test to see if we hit a ship or not and make adjustments.
                        this.attackPlayer(input, this.promptedGrid, this.actualGrid);

                    From here We can just print put the grid
                        this.printPromptedGrid();
            */

            let input = await this.getInput(this.availableCoordinates());
            this.attackPlayer(input, this.promptedGrid, this.actualGrid);
            console.log(this.printPromptedGrid());
        }

        return true;
    }

}

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const board = new Board(8, rl);
// board.gameState();

module.exports = Board;
