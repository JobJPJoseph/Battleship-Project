// const { expect } = require('chai');
// const User = require('../user');
// const Player = require('../player');
// const sinon = require('sinon');

// describe('User class', function () {

//     it('should create class called User', function () {
//         expect(new User()).to.exist;
//     });

//     describe('Constructor', function () {

//         it('instance should be an instance of User', function () {
//             const user = new User();
//             expect(user).to.be.instanceOf(User);
//         });

//         it('should have a property called "player" that is an instance of the Player class', function () {
//             const user = new User();
//             expect(user.player).to.exist.and.to.be.instanceOf(Player);
//         });

//         it('should create a method called getInput should accept a single called available positions', function () {
//             const user = new User();

//             expect(user.getInput).to.exist;
//         });

//         it('should return the input in that is an array type', async function () {
//             const readline = require('readline');

//             const rl = readline.createInterface({
//                 input: process.stdin,
//                 output: process.stdout,
//             });

//             const user = new User(rl);

//             async function run() {
//                 const input = await user.getInput([[0, 0], [0, 1]]);
//                 rl.close();
//                 expect(input).to.be.an('array'); // its an array. I want it to fail
//             }

//             await run();
//         });

//     });

// });
