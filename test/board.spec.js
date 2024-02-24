// const expect = require('chai').expect;
// const sinon = require('sinon');
// const Board = require('../board');
// const User = require('../user');

// describe('Board class', function () {

//     it('should create a class called Board', function () {
//         expect(Board).to.exist;
//     });

//     describe('Constructor', function () {

//         it('should initialize a contructor', function () {
//             const n = 5;
//             const board = new Board(n);

//             expect(board.constructor).to.exist;
//         });

//         it('should extend from the User class', function () {
//             const n = 5;
//             const board = new Board(n);

//             expect(board).to.be.instanceOf(User);
//         });

//         it('should initialize the width of the board', function () {
//             const n = 5;
//             const board = new Board(n);

//             expect(board.width).to.equal(5);
//         });

//         it('should initialize the size of the board', function () {
//             const n = 5;
//             const board = new Board(n);

//             expect(board.size).to.equal(25);
//         });

//         it('should initialize a property called promptedGrid whose value is the fillGrid method', function () {
//             const n = 5;
//             const board = new Board(n);

//             expect(board.promptedGrid).to.exist.and.to.be.a('array');
//         });

//         it('should initialize a property called actualGrid whose value is the fillGrid method', function () {
//             const n = 5;
//             const board = new Board(n);

//             expect(board.actualGrid).to.exist.and.to.be.a('array');
//         });

//         it('should call the fillActualGrid', function () {
//             const n = 5;
//             const board = new Board(n);

//             expect(board.fillActualGrid).to.exist.and.to.be.a('function');
//         });

//     });

//     describe('fillGrid', function () {

//         it('should create a method called fillGrid', function () {
//             const size = 5;
//             const board = new Board(size);

//             expect(board.fillGrid).to.exist;
//         });

//         it('should return a value that is a type of array', function () {
//             const size = 5;
//             const board = new Board(size);

//             expect(board.fillGrid()).to.be.a('array');
//         });

//         it('should return a 2-deminsional grid whose values is a "N" character', function () {
//             const n = 5;
//             const board = new Board(n);

//             const grid = board.fillGrid();

//             for(let i = 0; i < grid.length; i++) {

//                 for(let j = 0; j < grid.length; j++) {
//                     expect(grid[i][j]).to.equal("N");
//                 }

//             }

//         });

//     });

//     describe('placeEnemyShips', function () {

//         it('should declare a method call placeEnemyShips', function () {
//             const size = 5;
//             const board = new Board(size);

//             expect(board.placeEnemyShips).to.exist;
//         });

//         it('should randomly place 25% of the total amount ships to enemy ships', function () {

//         });

//         it('should call Math.random in your algorithm', function () {

//         });
//     });

//     describe('attackPlayer', function () {

//     });

//     describe('setPosition', function () {

//     });

//     describe('getPosition', function () {

//     });

//     describe('availableCoordinates', function () {

//     });

//     describe('countOfShips', function () {

//     });

//     describe('flatten', function () {

//     });

//     describe('printGrid', function () {

//     });

//     describe('printPromptedGrid', function() {

//     });

//     describe('printActualGrid', function () {

//     });

//     describe('gameState', async function () {

//     });
// })

const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

const expect = chai.expect;
const Board = require('../board');

describe('Board', function () {

    it('Must successfully create the Board class', function () {
        expect(Board).to.exist;
    });

    let board;

    beforeEach(function () {
        const size = 9;
        board = new Board(size);
    });


    describe('Constructor', function () {

        context('ActualGrid', function () {

            it('should initalize to a 9 by 9 grid', function () {
                expect(board.actualGrid.length).to.equal(9);
                expect(board.actualGrid[0].length).to.equal(9);
            });

        });

        context('PromptedGrid', function () {

            it('should initialize to a 9 by 9 grid', function () {
                expect(board.promptedGrid.length).to.equal(9);
                expect(board.promptedGrid[0].length).to.equal(9);
            });

        });


    });

});
