const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

const expect = chai.expect;
const Board = require('../board');
const { Screen } = require('../screen');

describe('Board', function () {

    it('Must successfully create the Board class', function () {
        expect(Board).to.exist;
    });

    let board;

    before(function () {
        const size = 9;
        board = new Board(size);
    });


    describe('Constructor', function () {

        context('ActualGrid', function () {

            it('should initalize to a 9 by 9 grid', function () {
                expect(Screen.actualGrid.length).to.equal(9);
                expect(Screen.actualGrid[0].length).to.equal(9);
            });

        });

        context('PromptedGrid', function () {

            it('should initialize to a 9 by 9 grid', function () {
                expect(Screen.promptedGrid.length).to.equal(9);
                expect(Screen.promptedGrid[0].length).to.equal(9);
            });

            it("should set each indices to the value 'N'", function () {
                const grid = Screen.promptedGrid;

                for (let i = 0; i < 3; i++) {
                    const row = grid[i];

                    expect(row.every((cell) => cell === "N")).to.equal(true);
                }

                for (let i = 6; i < 9; i++) {
                    const row = grid[i];

                    expect(row.every((cell) => cell === "N")).to.equal(true);
                }
            });

        });

    });

    describe('availableCoordinates', function () {

        it('should return an array of objects the contain a coordinate in the actualGrid: { row: 0, column: 0 }', function () {
            const validValues = board.availableCoordinates.call(Screen, 0, 3);
            // row: 0-2 col: 0-8

            const coordinate = [
                { row: 0, column: 0},
                { row: 0, column: 1},
                { row: 0, column: 2},
                { row: 0, column: 3},
                { row: 0, column: 4},
                { row: 0, column: 5},
                { row: 0, column: 6},
                { row: 0, column: 7},
                { row: 0, column: 8},
                { row: 1, column: 0},
                { row: 1, column: 1},
                { row: 1, column: 2},
                { row: 1, column: 3},
                { row: 1, column: 4},
                { row: 1, column: 5},
                { row: 1, column: 6},
                { row: 1, column: 7},
                { row: 1, column: 8},
                { row: 2, column: 0},
                { row: 2, column: 1},
                { row: 2, column: 2},
                { row: 2, column: 3},
                { row: 2, column: 4},
                { row: 2, column: 5},
                { row: 2, column: 6},
                { row: 2, column: 7},
                { row: 2, column: 8},

            ]

            expect(validValues.length, `availableCoordinates must be a length of ${coordinate.length}`).to.equal(coordinate.length);

            for (let i = 0; i < validValues.length; i++) {
                const obj1 = validValues[i];
                const obj2 = coordinate[i];

                expect(obj1).to.deep.equal(obj2);
            }

        });

    });

    describe("FillShips", function () {

        context('Enemy Ships', function () {

            it('Must randomly place 10 Enemy ships in the top layer of the grid', function () {
                const spyRandom = chai.spy.on(Math, 'random');

                board.fillShips(0, 3);

                expect(spyRandom).to.have.been.called.exactly(10);
                chai.spy.restore(Math, 'random');
            });

            context('Should cover from row 0 to not including 3', function () {

                it('Screen.actualGrid should have a total of 10 enemy ships', function () {
                    const grid = Screen.actualGrid;

                    let count = 0;

                    for(let i = 0; i < 3; i++) {
                        const row = grid[i];

                        row.forEach(function (cell) {
                            if (cell === 'S') count++;
                        });
                    }

                    expect(count).to.equal(10);
                });

            });

        });

        context('Player Ships', function () {

            it('Must randomly place 10 Enemy ships in the bottom layer of the grid', function () {
                const spyRandom = chai.spy.on(Math, 'random');

                board.fillShips(6, 9);

                expect(spyRandom).to.have.been.called.exactly(10);
                chai.spy.restore(Math, 'random');
            });

            context('Should cover from row 6 to not including 9', function () {

                it('this.actualGrid should have a total of 10 enemy ships', function () {
                    const grid = Screen.actualGrid;
                    let count = 0;

                    for(let i = 6; i < 9; i++) {
                        const row = grid[i];

                        row.forEach(function (cell) {
                            if (cell === 'S') count++;
                        });
                    }

                    expect(count).to.equal(10);
                });

            });

        });

    });

    describe('attackShip', function () {

        context('Hitting a target', function () {

            it("if on successful hit, should set index of promptedGrid to 'H'", function () {
                Screen.actualGrid[0][0] = "S";
                board.attackShip.call(Screen, { row: 0, column: 0 });
                expect(Screen.promptedGrid[0][0]).to.equal('H');
            });

            it('if on successful hit, should set index of actualGrid to "H"', function () {
                Screen.actualGrid[0][0] = "S";
                board.attackShip.call(Screen, { row: 0, column: 0 });
                expect(Screen.actualGrid[0][0]).to.equal('H');
            });

        });

        context('Missing your target', function () {

            it("if on successful miss, should set index of promptedGrid to 'X'", function () {
                Screen.actualGrid[0][0] = " ";
                board.attackShip.call(Screen, { row: 0, column: 0 });
                expect(Screen.promptedGrid[0][0]).to.equal('X');
            });

            it('if on successful miss, should set index of actualGrid to "X"', function () {
                Screen.actualGrid[0][0] = " ";
                board.attackShip.call(Screen, { row: 0, column: 0 });
                expect(Screen.actualGrid[0][0]).to.equal('X');
            });

        });

    });

    describe('remainingShips', function () {

        context('Enemy Ships', function () {

            it('should the number of enemy ships left pn the board', function () {
                const actual = board.remainingShips.call(Screen, 0, 3);
                const expected = 10;
                expect(actual).to.equal(expected);
            });

        });

        context('Player Ships', function () {

            it('should the number of Player ships left pn the board', function () {
                const actual = board.remainingShips.call(Screen, 6, 9);
                const expected = 10;
                expect(actual).to.equal(expected);
            });

        });

    });

});
