const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function start() {
    return new Promise((resolve) => {
        const askSize = () => {
            rl.question("Enter your size of the board: ", (input) => {
                try {
                    if (Number.isInteger(Number(input))) {
                        rl.close();
                        resolve(input);
                    } else {
                        throw new Error();
                    }
                } catch(error) {
                    console.error('The size input must be a number');
                    askSize();
                }
            });
        }

        askSize();
    });
}

async function run() {
    const size = await start();
    console.log(size);
}

run();
// const Board = require('./board');

// const board = new Board();
