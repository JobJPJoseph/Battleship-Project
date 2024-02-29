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

    describe("isValid", function () {

        it("should return Boolean on whether the player's input is valid", function () {

            const actual1 = "hello";
            const expected1 = false;

            const actual2 = "he11o";
            const expected2 = false;

            const actual3 = "0 0";
            const expected3 = true;

            const actual4 = "00";
            const expected4 = false;

            expect(player.isValid(actual1), `${actual1}`).to.equal(expected1);
            expect(player.isValid(actual2), `${actual2}`).to.equal(expected2);
            expect(player.isValid(actual3), `${actual3}`).to.equal(expected3);
            expect(player.isValid(actual4), `${actual4}`).to.equal(expected4);
        });

    });

    describe("formatInput", function () {

        it('should call Player.isValid()', function () {
            const isValidSpy = chai.spy.on(player, 'isValid');

            const input = '0 0';
            player.isValid(input);

            expect(isValidSpy).to.have.been.called;
        });

        context('When the string is false', function () {

            it('should return false, when the string is not valid', function () {
                const input = "0 p";
                const actual = player.formatInput(input);
                const expected = false;
                expect(actual).to.equal(expected);
            });

        });

        context('When the string is valid', function () {

            it('should return the input in an array type', function () {
                const input = "0 0";
                const actual = player.formatInput(input);
                const expected = [0, 0];
                expect(actual).to.deep.equal(expected);
            });

        });

    });

    describe('listOfCoordinates', function () {

        it('should retrieve all the coordinates from 0 to not including 3', function () {
            // We need to make sure that it is in the context of the Board class
            const inputs = player.listOfCoordinates.call(player.board);

            const expectedArr = [
                { row: 0, column: 0 },
                { row: 0, column: 1 },
                { row: 0, column: 2 },
                { row: 0, column: 3 },
                { row: 0, column: 4 },
                { row: 0, column: 5 },
                { row: 0, column: 6 },
                { row: 0, column: 7 },
                { row: 0, column: 8 },
                { row: 1, column: 0 },
                { row: 1, column: 1 },
                { row: 1, column: 2 },
                { row: 1, column: 3 },
                { row: 1, column: 4 },
                { row: 1, column: 5 },
                { row: 1, column: 6 },
                { row: 1, column: 7 },
                { row: 1, column: 8 },
                { row: 2, column: 0 },
                { row: 2, column: 1 },
                { row: 2, column: 2 },
                { row: 2, column: 3 },
                { row: 2, column: 4 },
                { row: 2, column: 5 },
                { row: 2, column: 6 },
                { row: 2, column: 7 },
                { row: 2, column: 8 },
            ]

            expect(inputs.length).to.equal(expectedArr.length);

            for (let i = 0; i < expectedArr.length; i++) {
                const coordinate = inputs[i];
                const expected = expectedArr[i];

                expect(coordinate).to.deep.equal(expected);
            }

        });

    });

    describe('askForInput', function () {

        context('Asynchronous', function () {

            it('it should return a Promise', function () {


            });

            it('should call isValid', function () {
                // const askForInputSpy = chai.spy.on(player, 'askForInput');

                // player.askForInput(player.board.)

            });

            it('should call formatInput', function () {

            });

        });

    });

});
