// class Player {
//     constructor(rl = null) {
//         this.rl = rl;
//     }

//     async getCoordinate(availablePositions) {

//         return await new Promise((resolve) => {

//             const askCoordinate = () => {

//                 this.rl.question('Enter a valid coordinate in this form: 0 0 ', (input) => {
//                     const coordinate = this.formatCoordinates(input);
//                     const isValid = this.validateCoordinates(availablePositions, coordinate);

//                     try {

//                         if(isValid) {
//                             resolve(coordinate);
//                         } else {
//                             throw new Error();
//                         }

//                     } catch(error) {
//                         console.error('Invalid Coordinate\nMust be in this form: 0 0 ');
//                         askCoordinate();
//                     }

//                 });

//             }

//             askCoordinate();
//         });

//     }

//     validateCoordinates(availableCoordinates, input) {
//         for (const position of availableCoordinates) {
//             if (JSON.stringify(position) === JSON.stringify(input)) return true;
//         }

//         return false;
//     }

//     formatCoordinates(input) {
//         if (input.length !== 3 || this.countSpaces(input) !== 1) {
//             return false;
//         }

//         return this.formatInput(input);
//     }

//     countSpaces(input) {
//         return input.split(" ").length - 1;
//     }

//     formatInput(input) {
//         return input.split(" ").map(Number);
//     }
// }


// module.exports = Player;

const { stdin } = require('process');
const readline = require('readline');

class Player {
    constructor(object) {
        this.board = object;
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
            return input.split(' ').map(elem => parseInt(elem));
        } else {
            return false;
        }
    }

    listOfCoordinates() { // Context is different
        const coordinates = [];

        for (let i = 0; i < 3; i++) {

            for (let j = 0; j < 9; j++) {

                coordinates.push({ row: i, column: j });
            }

        }

        return coordinates;
    }

    checkForInclusion(input, choices) {

        for(let i = 0; i < choices.length; i++) {
            const choice = choices[i];

            if((input.row === choice.row) && (input.column === choice.column)) return true;
        }

        return false;
    }

    askForInput(coordinates) {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve) => {
            // implement checkForInclusion

            const getCoordinate = () => {

                rl.question('Enter your coordinate: ', (input) => {
                    if(this.isValid(input)) {
                        const coordinate = this.formatInput(input);
                        rl.close();
                        resolve(coordinate);
                    } else {
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
