class Player {
    constructor(rl = null) {
        this.rl = rl;
    }

    async getCoordinate(availablePositions) {

        return await new Promise((resolve) => {

            const askCoordinate = () => {

                this.rl.question('Enter a valid coordinate in this form: 0 0 ', (input) => {
                    const coordinate = this.formatCoordinates(input);
                    const isValid = this.validateCoordinates(availablePositions, coordinate);

                    try {

                        if(isValid) {
                            resolve(coordinate);
                        } else {
                            throw new Error();
                        }

                    } catch(error) {
                        console.error('Invalid Coordinate\nMust be in this form: 0 0 ');
                        askCoordinate();
                    }

                });

            }

            askCoordinate();
        });

    }

    validateCoordinates(availableCoordinates, input) {
        for (const position of availableCoordinates) {
            if (JSON.stringify(position) === JSON.stringify(input)) return true;
        }

        return false;
    }

    formatCoordinates(input) {
        if (input.length !== 3 || this.countSpaces(input) !== 1) {
            return false;
        }

        return this.formatInput(input);
    }

    countSpaces(input) {
        return input.split(" ").length - 1;
    }

    formatInput(input) {
        return input.split(" ").map(Number);
    }
}


module.exports = Player;
