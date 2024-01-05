const Users = require('./user');

class Board extends Users {
    constructor() {
        this.readline = require('readline');
        super(this.readline);

        this.grid = [];
        // Fill the grid instance
        for (let i = 0; i < 20; i++) {
            const row = [];

            for (let i = 0; i < 20; i++) {
                row.push("N");
            }

            this.grid.push(row);
        }

    }

    static GRID = [];

    // Fill the class grid
    static fillClassGrid() {

        for (let i = 0; i < 20; i++) {
            const row = [];

            for (let i = 0; i < 20; i++) {
                row.push(" ");
            }

            Board.GRID.push(row);
        }

        return true;
    }


}

module.exports = Board;
