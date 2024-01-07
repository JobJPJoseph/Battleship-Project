class Player {
    constructor(readline) {
        this.readline = readline;
    }

    async getCoordinate(availablePositions) {

        const rl = this.readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return await new Promise((resolve) => {
            const askCoordinate = () => {
                rl.question('Enter a valid coordinate in this form: 0 0 ', (input) => {
                    const coordinate = this.formatCoordinates(input);
                    const isValid = this.validateCoordinates(availablePositions, coordinate);

                    try {
                        if(isValid) {
                            rl.close();
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

    validateCoordinates(availablePositions, input) {
        for (let i = 0; i < availablePositions.length; i++) {
            const position = availablePositions[i];

            if (JSON.stringify(position) === JSON.stringify(input)) return true;
        }

        return false;
    }

    formatCoordinates(input) {
        if (input.length !== 3) return false;
        if (this.countSpaces(input) !== 1) return false;
        return this.formatInput(input);
    }

    countSpaces(input) {
        let count = 0;

        for (let i = 0; i < input.length; i++) {
            const isSpace = input[i];

            if (isSpace === " ") count++;
        }

        return count;
    }

    formatInput(input) {
        return input.split(" ").map(function(elem) {
            return Number(elem);
        });
    }
}

module.exports = Player;
