// const Board = require('./board');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });


// async function askBoardSize() {

//     return await new Promise((resolve) => {

//         const askSize = () => {

//             rl.question("Enter your size of the board: ", (input) => {

//                 try {

//                     if (Number.isInteger(Number(input))) {
//                         resolve(input);
//                     } else {
//                         throw new Error();
//                     }

//                 } catch(error) {
//                     console.error('Invalid input: Please enter a positive integer.');
//                     askSize();
//                 }

//             });

//         }

//         askSize();
//     });

// }

// async function startGame() {

//     try {
//         const size = await askBoardSize();
//         const board = new Board(size, rl);
//         await board.gameState();
//         console.log('You Win!!!')
//     } catch (error) {
//         console.error('An error occurred during game setup:', error);
//     } finally {
//         rl.close();
//     }

// }

// startGame();

const Board = require('./board');
const { Player } = require('./player');
const ComputerPlayer = require('./cpu');

const size = 9;
const board = new Board(size);
board.fillShips(0, 3);
board.fillShips(6, 9);

const player = new Player(board);
const computerPlayer = new ComputerPlayer(board);


async function gameState() {
    board.printGrid();

    while(true) {
        // Now lets simulate a single turn
        let turn;

        turn = await player.askForInput();
        board.attackShip(turn);
        if(!board.remainingShips(6, 9)) {
            console.log('You have Won!');
            break;
        }
        turn = computerPlayer.getValidPosition();
        board.attackShip(turn);
        if(!board.remainingShips(0, 3)) {
            console.log('Sorry, Player has Lost!');
            break;
        }
        console.clear();
        board.printGrid();
    }

}

gameState();
