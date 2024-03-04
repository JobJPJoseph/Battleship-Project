# Battleship Project

We will make a CLI version a battleship game.
However, like the CLI `Tic-Tak-Toe Project`, we are going to further
implement more of what we learned. In some cases it may not make sense to do so but
that isnt the goal to make a perfect working code.

## Things to implement:
    Inheritance:
    Binding (context):
    Asychronousity (Promises/asyce-await):
    Error Handling:
    NPM Packages (Mocha/Chai):
    Class instances:
    Single Responsibiity Principle:

## Update:
    We need to redesign this project so that it is more readable and make it as we want it.

## Phase 1
    When we initialize the board it will be a 9x9 grid. We will not ask for the size of the grid. 1/3 of the grid will be filled with the Computer's ships and the bottom 1/3 will be filled with the Player's ships. Leaving the last 1/3 an empty zone.

## Phase 2
    Since Player and ComputerPlayer are always getting a range on coordinates we don't have to worry about providing that to attackShip. We will design the attckShip  method to now reference the a coordinate in actualGrid and set it to `S`, `H` or `X`.

## Phase 3
    Now lets focus on making the Computer class. The class will accept 'this' as an argument. It will NOT extend from the Board class. From here create a situation where it has a 50/50 chance to hit a ship and not hit a ship.

## Phase 4
    This phase will focus on retrieve the player's input and return it in an object format. It will NOT extend from the board class. It will have a constructor. Make sure to validate the player's input.

## Phase 5
    In this phase we will turn our focus back towards the Board class. We need to print the board in a particular way.

## Phase 6
