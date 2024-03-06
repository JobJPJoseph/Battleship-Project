const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

const expect = chai.expect;

const { Screen } = require('../screen');
const { Player } = require('../player');
const Board = require('../board');

describe('Player class', function () {

    it('should successfully create the Player class', function () {
        expect(Player).to.exist;
    });

    it('should successfully create the Screen class', function () {
        expect(Screen).to.exist;
    });

    it('should successfully create the Board class', function () {
        expect(Board).to.exist;
    });

    let board;
    let player;

    before(function () {
        const size = 9;
        board = new Board(size);
        board.fillShips(0, 3);
        board.fillShips(6, 9);
        player = new Player(size);
    });

    describe('Constructor', function () {

        it('should also be an instance of the Board class', function () {
            expect(player).to.be.instanceOf(Board);
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
            chai.spy.restore(player, 'isValid');
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

            it('should return the input in an object type', function () {
                const input = "0 0";
                const actual = player.formatInput(input);
                const expected = { row: 0, column: 0 };
                expect(actual).to.deep.equal(expected).and.to.be.a('object');
            });

        });

    });

    describe('listOfCoordinates', function () {

        it('should retrieve all the coordinates from 0 to not including 3', function () {
            Screen.actualGrid[0][0] = "X";
            const inputs = player.listOfCoordinates.call(Screen);
            expect(inputs.length).to.equal(26);
            Screen.actualGrid[0][0] = " ";

        });

    });

    describe('checkForInclusion', function () {

        it('should return a Boolean on whether the input is included', function () {
            const input = { row: 1, column: 5 };

            const coordinates = [
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

            expect((player.checkForInclusion(input, coordinates))).to.equal(true);
        });

    });

    describe('askForInput', function () {

        context('Asynchronous', function () {

            let isValidSpy, formatInputSpy, checkForInclusionSpy;

            before(function () {
                isValidSpy = chai.spy.on(player, 'isValid');
                formatInputSpy = chai.spy.on(player, 'formatInput');
                checkForInclusionSpy = chai.spy.on(player, 'checkForInclusion');
            });

            after(function () {
                chai.spy.restore(isValidSpy);
                chai.spy.restore(formatInputSpy);
                chai.spy.restore(checkForInclusionSpy);
            });

            it('it should return a Promise', async function () {
                const actual = await player.askForInput(player.listOfCoordinates.call(Screen));
                return expect(actual).to.be.instanceOf(Object);
            });

            it('should call isValid', async function () {
                const input = player.listOfCoordinates.call(Screen);
                await player.askForInput(input);
                return expect(isValidSpy).to.have.been.called;
            });

            it('should call formatInput', async function () {
                const input = player.listOfCoordinates.call(Screen);
                await player.askForInput(input);
                return expect(formatInputSpy).to.have.been.called;
            });

            it('should call checkForInclusion', async function () {
                const input = player.listOfCoordinates.call(Screen);
                await player.askForInput(input);
                return expect(checkForInclusionSpy).to.have.been.called;
            });

            it("should return the player's input", async function () {
                const input = await player.askForInput();
                expect(input).to.be.a('object');
                return expect(player.listOfCoordinates.call(Screen)).that.deep.include(input);
            });

        });

    });

});
