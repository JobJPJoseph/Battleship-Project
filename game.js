const { Screen } = require('./screen');
const Board = require('./board');
const { Player } = require('./player');
const ComputerPlayer = require('./cpu');

const size = 9;
const board = new Board(size);
board.fillShips(0, 3);
board.fillShips(6, 9);

const player = new Player(size);
const computerPlayer = new ComputerPlayer(size);


async function gameState() {
    Screen.printGrid();

    while (true) {
        let turn;

        turn = await player.askForInput();
        board.attackShip.call(Screen, turn);
        if(!board.remainingShips.call(Screen, 6, 9)) {
            console.log('You have Won!');
            break;
        }

        turn = computerPlayer.getValidPosition();
        board.attackShip.call(Screen, turn);
        if(!board.remainingShips.call(Screen, 0, 3)) {
            console.log('Sorry, Player has lost!');
            break;
        }

        console.clear();
        Screen.printGrid();
    }

}

gameState();
