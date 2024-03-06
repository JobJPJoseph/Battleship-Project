const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

const expect = chai.expect;

const { Screen } = require('../screen');
const ComputerPlayer = require('../cpu');
const Board = require('../board');


describe('Computer Player', function () {
    // Make sure to call Board on its own then call ComputerPlayer

    it('should successfully create the Board class', function () {
        expect(Board).to.exist;
    });

    it('should successfully create the Computer Player class', function () {
        expect(ComputerPlayer).to.exist;
    });

    let board;
    let computerPlayer;

    // console.log(Screen.isInitialized);
    // console.log(Screen.promptedGrid.length);
    // board = new Board(9);
    // console.log(Screen.isInitialized);
    // console.log(Screen.promptedGrid.length);
    // computer = new ComputerPlayer(9);
    // console.log(Screen.isInitialized);
    // console.log(Screen.promptedGrid.length);



    before(function () {
        const size = 9;
        board = new Board(size);
        board.fillShips(0, 3);
        board.fillShips(6, 9);
        computerPlayer = new ComputerPlayer(size);
    });

    // it('should successfully create an instance of ComputerPlayer', function () {
    //     const computerPlayer = new ComputerPlayer();
    //     expect(computerPlayer).to.be.instanceOf(ComputerPlayer);
    //     expect(computerPlayer).to.be.instanceOf(Board);
    // });

    // let board;
    // let computerPlayer;

    // before(function () {
    //     const size = 9;
    //     // board = new Board(size);
    //     // board.fillShips(0, 3);
    //     // board.fillShips(6, 9);
    //     // computerPlayer = new ComputerPlayer(board);
    //     computerPlayer = new ComputerPlayer(size);
    // });


    describe('Constructor', function () {

        // it('should accept an argument the represnt an instance of the Board class', function () {
        //     expect(computerPlayer.board, 'should be an object').to.be.a('object');
        //     expect(computerPlayer.board, 'should be an instance of Board').to.be.instanceOf(Board);
        // });

        it('should have the ComputerPlayer also be an instance of the Board class', function () {
            expect(computerPlayer).to.be.instanceOf(Board);
        });

    });

    describe('getPlayerShips', function () {
        // This will focus on retrieving all the coordinates of where the player's ships are
        // This will be called by getValidPosition
        // board.getValidPosition(6, 9);
        it("should return a array of objects that represent coordinates of player's ships locations", function () {
            // const expected = computerPlayer.getPlayerShips(6, 9);
            const expected = computerPlayer.getPlayerShips.call(Screen);
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
            expect(computerPlayer.getPlayerShips.call(Screen)).to.deep.include(expected);
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
            // expect(computerPlayer.board.availableCoordinates(6, 9)).to.deep.include(expected);
            expect(computerPlayer.availableCoordinates.call(Screen, 6, 9)).to.deep.include(expected);
        });

    });

});
