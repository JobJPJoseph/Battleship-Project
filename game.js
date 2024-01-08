const Board = require('./board');
const rl = require('./inputHelper');

async function askBoardSize() {


    return await new Promise((resolve) => {
        const askSize = () => {
            rl.question("Enter your size of the board: ", (input) => {
                try {
                    if (Number.isInteger(Number(input))) {
                        // rl.close();
                        resolve(input);
                    } else {
                        throw new Error();
                    }
                } catch(error) {
                    console.error('Invalid input: Please enter a positive integer.');
                    askSize();
                    // rl.close()
                }
            });
        }

        askSize();
    });
}

async function run() {
    const size = await askBoardSize();
    console.log(size);
    return size;
}

async function startGame() {
    try {
        console.log(true, 1);
        const num = await run();
        console.log(true, 2);
        console.log(num);
        const board = new Board(num);
        console.log(true, 3) // not being reached
        await board.gameState();
    } catch(error) {
        console.error('An error occurred during game setup:', error);
    }
}

startGame();
