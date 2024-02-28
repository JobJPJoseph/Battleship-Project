// const  { expect } = require('chai');
// const sinon = require('sinon');

// const Player = require('../player');

// describe('Player Class', function () {
//     it('should successfully create the player instance', function () {
//         const player = new Player();

//         expect(player).to.exist;
//     });

//     it('should be an instance of the Player class', function () {
//         const player = new Player();

//         expect(player).to.be.instanceOf(Player);
//     });

//     it('should accept a an opened readline interface and for it to be initialized', async () => {
//         const readline = require('readline');

//         function start(readline) {
//             const rl = readline.createInterface({
//                 input: process.stdin,
//                 output: process.stdout
//             });

//             const player = new Player(rl);

//             rl.close();
//             expect(player.rl).to.exist;

//         }

//         start(readline);

//     }, 5000);


//     describe('Player: countSpaces', function () {

//         it('should create a method called countSpces', function () {
//             const player = new Player();

//             expect(player.countSpaces).to.exist;
//         });

//         it('should only include one space in the input; must be in the format: 0 0', function () {
//             const player = new Player();

//             const strInput = '0 0';

//             expect(player.countSpaces(strInput)).to.equal(1);
//         });
//     });

//     describe('Player: formatInput', function () {
//         it('should create a method called formatInput that should accept a string input in the form: 0 0', function () {
//             const player = new Player();

//             expect(player.formatInput).to.exist;
//         });

//         it('should split the input on the single space and return an array', function () {
//             const player = new Player();

//             const strInput = '0 0';

//             expect(player.formatInput(strInput)).to.deep.equal([0, 0]);
//         });
//     });

//     describe('Player: formatCoordinates', function () {
//         it('should create a method called formatCoordinates that will accept a string input in the format: 0 0', function () {
//             const player = new Player();

//             expect(player.formatCoordinates).to.exist;
//         });

//         it('should format string input into an array', function () {
//             const player = new Player();

//             const strInput = '0 0';

//             expect(player.formatCoordinates(strInput)).to.deep.equal([0, 0]);
//         });

//         it('should call Player: countSpaces within Player: formatCoordinates', function () {
//             const player = new Player();

//             const isCalledCountSpacesSpy = sinon.spy(player, 'countSpaces');

//             const strInput = '0 0';
//             player.formatCoordinates(strInput);

//             expect(isCalledCountSpacesSpy.calledOnce).to.be.true;

//             isCalledCountSpacesSpy.restore();
//         })
//     });

//     describe('Player: validateCoordinate', function () {

//         it('should create a method called validateCoordinate and accept two arguments; availablePositions and input', function () {
//             const player = new Player();

//             expect(player.validateCoordinates).to.exist;

//         });

//         it('should check if input is included in availableCoordinates', function () {
//             const player = new Player();

//             const availableCoordinate = [
//                 [0, 0], [0, 1], [0, 2]
//             ];

//             const input = [0, 1];

//             expect(player.validateCoordinates(availableCoordinate, input)).to.be.true;
//         });


//     });

//     describe('Player: getCoordinates', function () {

//         it('should create a method called getCoordinates', function () {
//             const player = new Player();

//             expect(player.getCoordinate).to.exist;
//         });

//         it('getCoordinate should have asychronous behavior', function () {
//             const player = new Player();

//             const input = player.getCoordinate();

//             expect(input).to.be.a('Promise');
//         });

//         it('should return a input that is an Array type', async function () {
//             const readline = require('readline');

//             const rl = readline.createInterface({
//                 input: process.stdin,
//                 output: process.stdout,
//             });

//             const player = new Player(rl);

//             async function run() {
//                 const input = await player.getCoordinate([[0, 0], [0, 1]]);
//                 rl.close();
//                 expect(input).to.be.an('array'); // its an array. I want it to fail
//             }

//             await run();
//         });

//         // it('getCoordinate should call validateCoordinates', function () {
//         //     const readline = require('readline');

//         //     const rl = readline.createInterface({
//         //         input: process.stdin,
//         //         output: process.stdout,
//         //     });

//         //     const player = new Player(rl);

//         //     const validateCoordinatesSpy = sinon.spy(player, 'validateCoordinates');

//         //     async function run() {
//         //         await player.getCoordinate([[0, 0], [0, 1]]);
//         //         expect(validateCoordinatesSpy.calledOnce).to.be.false;
//         //         validateCoordinatesSpy.restore();
//         //     }

//         //     run();
//         //     rl.close();
//         // });

//         // it('getCoordinate should call formatCoordinates', function () {

//         // });

//     });

// })

const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

const expect = chai.expect;
const { Player } = require('../player');
const Board = require('../board');

describe('Player class', function () {

    it('should successfully create the Player class', function () {
        expect(Player).to.exist;
    });

    let player;
    let board;

    beforeEach(function () {
        const size = 9;
        board = new Board(size);
        board.fillShips(0, 3);
        board.fillShips(6, 9);
        player = new Player(board);
    });

    describe('Constructor', function () {

        it('should initialize the board instance', function () {
            expect(player.board).to.exist;
            expect(player.board, 'should be an Object').to.be.a('object');
        });

    });

});
