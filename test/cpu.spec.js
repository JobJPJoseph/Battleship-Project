// const { expect } = require('chai');
// const  sinon  = require('sinon');
// const chai = require('chai');
// const spies = require('chai-spies');
// chai.use(spies);
// const expect = chai.expect;


// const ComputerPlayer = require('../cpu');

// describe('CPU class', function() {

//     it('The CPU class successfully created', function () {
//         const cpu = new CPU();

//         expect(cpu).to.exist
//     });

//     it('should be an instance of the CPU class', function () {
//         const cpu = new CPU();

//         expect(cpu).to.be.instanceOf(CPU);
//     });

//     it('should declare a method call getCoordinate', function () {
//         const cpu = new CPU();

//         const isMethod = cpu.getCoordinate;

//         expect(isMethod).to.exist;
//     })

//     it('getCoordinate must be asynchronous', function () {
//         const cpu = new CPU();

//         // We want the getCoordinate() to have an asychronous behavior.
//         const input = cpu.getCoordinate();

//         expect(input).to.be.a('Promise');
//     });

//     it('getCoordinate should return random coordinate from availablePositions', function () {
//         const cpu = new CPU();

//         const availablePositions = [
//             [0, 0], [0, 1], [0, 2]
//         ];

//         async function getInput() {
//             const input = await cpu.getCoordinate(availablePositions);

//             expect(availablePositions).to.deep.include(input);
//         }

//         getInput();

//     });

//     it('getCoordinate should use the method Math.random()', function () {
//         // I want to make sure that that the algorithm created uses Math.random
//         const cpu = new CPU();

//         const availablePositions = [
//             [0, 0], [0, 1], [0, 2]
//         ];

//         const mathRandomSpy = sinon.spy(Math, 'random');

//         cpu.getCoordinate(availablePositions);

//         expect(mathRandomSpy.called).to.be.true;

//         mathRandomSpy.restore();
//     });

// });

// describe('Computer Player', function () {

//     describe('Constructor', function () {

//         it('The ComputerPlayer class successfully created', function () {
//             const computer = new ComputerPlayer();
//         });
//     });
// });

const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

const expect = chai.expect;

const ComputerPlayer = require('../cpu');
const Board = require('../board');

describe('Computer Player', function () {

    // Note: The only way for ComputerPlayer to extends from Board is when the
    // board.actualGrid was a class method not an instance method

    it('should successfully create an instance of ComputerPlayer', function () {
        const computerPlayer = new ComputerPlayer();
        expect(computerPlayer).to.be.instanceOf(ComputerPlayer);
    });

    let board;
    let computerPlayer;

    beforeEach(function () {
        const size = 9;
        board = new Board(size);
        board.fillShips(0, 3);
        board.fillShips(6, 9);
        computerPlayer = new ComputerPlayer(board);
    });

    describe('Constructor', function () {

        it('should accept an argument the represnt an instance of the Board class', function () {
            expect(computerPlayer.board, 'should be an object').to.be.a('object');
            expect(computerPlayer.board, 'should be an instance of Board').to.be.instanceOf(Board);
        });

    });

    describe('getPlayerShips', function () {
        // This will focus on retrieving all the coordinates of where the player's ships are
        // This will be called by getValidPosition
        // board.getValidPosition(6, 9);
        it("should return a array of objects that represent coordinates of player's ships locations", function () {
            const expected = computerPlayer.getPlayerShips(6, 9);
            expect(expected).to.be.a('array');
            expect(expected.length).to.equal(10);

            for(let i = 0; i < expected.length; i++) {
                const coordinate = expected[i];

                expect(coordinate, `index: ${i} or ${coordinate} is not an object`).to.be.a('object');
            }

        });


    });

    describe('exeCheatEngine', function () {
        // This will focus on returning a random boolean
        // const chance = Math.floor(Math.random() * 2);
        // return (chance) ? true : false;

        it('should use Math.random()', function () {
            const spyRandom = chai.spy.on(Math, 'random');

            computerPlayer.exeCheatEngine();

            expect(spyRandom).to.have.been.called;
            chai.spy.restore(Math, 'random');
        });

        it('should return true or false based on a 50/50 chance.', function () {
            const chance = computerPlayer.exeCheatEngine();
            expect(chance).to.be.a('boolean');
        });

    });

    describe('getRandomPlayerShip', function () {

        it('should use Math.random', function () {
            const spyRandom = chai.spy.on(Math, 'random');

            computerPlayer.getRandomPlayerShip();

            expect(spyRandom).to.have.been.called;
            chai.spy.restore(Math, 'random');
        });

        it('should call computerPlayer.getPlayerShips', function () {
            const spyGetPlayerShips = chai.spy.on(computerPlayer, 'getPlayerShips');

            computerPlayer.getRandomPlayerShip();

            expect(spyGetPlayerShips).to.have.been.called;
            chai.spy.restore(computerPlayer, 'getPlayerShips');
        });

        it("should return a coordinate that represents a player's ship coordinate", function () { // check this
            const expected = computerPlayer.getRandomPlayerShip();
            expect(computerPlayer.getPlayerShips()).to.deep.include(expected);
        });

    });

    describe('getRandomAvailablePosition', function () {

        it('should use Math.random', function () {
            const spyRandom = chai.spy.on(Math, 'random');

            computerPlayer.getRandomAvailablePosition();

            expect(spyRandom).to.have.been.called;
            chai.spy.restore(Math, 'random');
        });

        it('should return a random coordinate from computer.board.availableCoordinates', function () {
            const expected = computerPlayer.getRandomAvailablePosition();
            expect(computerPlayer.board.availableCoordinates(6, 9)).to.deep.include(expected);
        });

    });

    describe('getValidPosition', function  () {

        it('should call board.availableCoordinates and return a random', function () {
            // If true, will call getPlayerShips and return a random ship from the array
            // If false, will call board.availableCoordinates

        });

    });


});
