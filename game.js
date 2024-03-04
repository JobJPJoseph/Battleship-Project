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
