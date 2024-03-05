const { Screen } = require('../screen');


const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const expect = chai.expect;

describe('Screen', function () {

    it('should declare a class called Screen', function () {
        expect(Screen).to.exist;
    });

    before(function () {
        const size = 9
        Screen.initialize(size);
    });

    /*
    What we need:
        printGrid
            portion
            spaceBetween
            range

    */

    describe('initialize', function () {

        context('ActualGrid', function () {

            it('should initalize to a 9 by 9 grid', function () {
                const actual = Screen.actualGrid;
                expect(actual.length).to.equal(9);
                expect(actual[0].length).to.equal(9);
            });

        });

        context('PromptedGrid', function () {

            it('should initalize to a 9 by 9 grid', function () {
                const actual = Screen.promptedGrid;
                expect(actual.length).to.equal(9);
                expect(actual[0].length).to.equal(9);
            });

            it('between the range 3-6 must fill with water', function () {
                const grid = Screen.promptedGrid;

                for (let k = 3; k < 6; k++) {
                    const row = grid[k];

                    expect(row.every(elem => elem === "~")).to.equal(true);
                }

            });

        });

        // describe('fillShips', function () {

        //     context('Enemy Ships 0-3', function () {

        //         it('Screen.actualGrid should have a total of 10 enemy ships randomly placed', function () {
        //             const grid = Screen.actualGrid;

        //             let count = 0;

        //             for(let i = 0; i < 3; i++) {
        //                 const row = grid[i];

        //                 row.forEach(function (cell) {
        //                     if (cell === 'S') count++;
        //                 });
        //             }

        //             expect(count).to.equal(10);

        //         });

        //     });

        //     context('Player Ships 6-9', function () {

        //         it('Screen.actualGrid should have a total of 10 player ships randomly placed', function () {
        //             const grid = Screen.actualGrid;

        //             let count = 0;

        //             for(let i = 6; i < 9; i++) {
        //                 const row = grid[i];

        //                 row.forEach(function (cell) {
        //                     if (cell === 'S') count++;
        //                 });
        //             }

        //             expect(count).to.equal(10);
        //         });

        //     });

        // });

    });

});
