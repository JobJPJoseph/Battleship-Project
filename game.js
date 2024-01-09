const Board = require('./board');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


async function askBoardSize() {

    return await new Promise((resolve) => {

        const askSize = () => {

            rl.question("Enter your size of the board: ", (input) => {

                try {

                    if (Number.isInteger(Number(input))) {
                        resolve(input);
                    } else {
                        throw new Error();
                    }

                } catch(error) {
                    console.error('Invalid input: Please enter a positive integer.');
                    askSize();
                }

            });

        }

        askSize();
    });

}

async function startGame() {

    try {
        const size = await askBoardSize();
        const board = new Board(size, rl);
        await board.gameState();
    } catch (error) {
        console.error('An error occurred during game setup:', error);
    } finally {
        rl.close();
    }

}

startGame();
