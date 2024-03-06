const readline = require('readline');
const Board = require('./board');
const { Screen } = require('./screen');

class Player extends Board {
    constructor(n) {
        // this.board = object;
        super(n);
    }

    isValid(input) {
        const arrInput = input.split(" ");

        if(arrInput.length !== 2) return false;

        if(!arrInput.every(function (element) {
            const word = parseInt(element);
            return Number.isInteger(word);
        })) return false;

        return true;
    }

    formatInput(input) {

        if (this.isValid(input)) {
            return { row: parseInt(input[0]), column: parseInt(input[2])};
        } else {
            return false;
        }
    }

    listOfCoordinates() {
        const coordinates = [];

        for(let i = 0; i < 3; i++) {

            for(let j = 0; j < this.actualGrid[0].length; j++) {

                if(this.actualGrid[i][j] === ' ' || this.actualGrid[i][j] === 'S') coordinates.push({ row: i, column: j });
            }

        }

        return coordinates;
    }

    checkForInclusion(input, choices) { // Use destructuring

        for(let i = 0; i < choices.length; i++) {
            const choice = choices[i];

            if((input.row === choice.row) && (input.column === choice.column)) return true;
        }

        return false;
    }

    async askForInput() {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return await new Promise((resolve) => {

            const getCoordinate = () => {

                rl.question('Enter your coordinate: ', (strInput) => {
                    const input = this.formatInput(strInput);

                    if(this.checkForInclusion(input, this.listOfCoordinates.call(Screen))) {
                        rl.close();
                        resolve(input);
                    } else {
                        console.log('Invalid Input');
                        getCoordinate();
                    }

                });

            }

            getCoordinate();
        });

    }

}

module.exports = {
    Player
}
