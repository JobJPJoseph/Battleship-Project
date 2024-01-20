const expect = require('chai').expect;
const sinon = require('sinon');
const Board = require('../board');
const User = require('../user');

describe('Board class', function () {

    it('should create a class called Board', function () {
        expect(Board).to.exist;
    });

    describe('Constructor', function () {

        it('should initialize a contructor', function () {
            const n = 5;
            const board = new Board(n);

            expect(board.constructor).to.exist;
        });

        it('should extend from the User class', function () {
            const n = 5;
            const board = new Board(n);

            expect(board).to.be.instanceOf(User);
        });

        it('should initialize the width of the board', function () {
            const n = 5;
            const board = new Board(n);

            expect(board.width).to.equal(5);
        });

        it('should initialize the size of the board', function () {
            const n = 5;
            const board = new Board(n);

            expect(board.size).to.equal(25);
        });

        it('should initialize a property called promptedGrid whose value is the fillGrid method', function () {
            const n = 5;
            const board = new Board(n);

            expect(board.promptedGrid).to.exist.and.to.be.a('array');
        });

        it('should initialize a property called actualGrid whose value is the fillGrid method', function () {
            const n = 5;
            const board = new Board(n);

            expect(board.actualGrid).to.exist.and.to.be.a('array');
        });

        it('should call the fillActualGrid', function () {
            const n = 5;
            const board = new Board(n);

            expect(board.fillActualGrid).to.exist.and.to.be.a('function');
        });

    });

    describe('fillGrid', function () {

    });

    describe('fillActuslGrid', function () {

    });

    describe('placeEnemyShips', function () {

    });

    describe('attackPlayer', function () {

    });

    describe('setPosition', function () {

    });

    describe('getPosition', function () {

    });

    describe('availableCoordinates', function () {

    });

    describe('countOfShips', function () {

    });

    describe('flatten', function () {

    });

    describe('printGrid', function () {

    });

    describe('printPromptedGrid', function() {

    });

    describe('printActualGrid', function () {

    });

    describe('gameState', async function () {

    });
})
