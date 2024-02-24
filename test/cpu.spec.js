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
