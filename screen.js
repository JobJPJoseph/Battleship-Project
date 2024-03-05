class Screen {
    // Im going to attemp something different

    static actualGrid = [];

    static promptedGrid = [];

    static initialize(n) {

        for (let i = 0; i < n; i++) {

            Screen.actualGrid.push(new Array(n).fill(" "));
            Screen.promptedGrid.push(new Array(n).fill("N"));

        }

        Screen.addWater();
    }

    static addWater() {

        for (let j = 3; j < 6; j++) {

            for (let k = 0; k < Screen.promptedGrid.length; k++) {
                Screen.promptedGrid[j][k] = '~';
            }

        }

    }

    static printGrid() { // promptedGrid
        Screen.portion(0, 3);

        console.log()
        console.log()

        Screen.spaceBetween(3, 6);

        console.log()
        console.log()

        Screen.portion(6, 9);
    }
    static portion(min, max) {
        const ships = Screen.range(min, max);

        console.log(ships.map(row => row.join(" | ")).join('\n' + '_________________________________' + '\n'));
    }

    static spaceBetween(min, max) {
        const water = Screen.range(min, max);

        console.log(water.map(row => row.join(" | ")).join('\n' + '_________________________________' + '\n'));
    }

    static range(min, max) {
        const arr = [];

        for(let i = min; i < max; i++) {
            const row = Screen.promptedGrid[i];
            arr.push(row);
        }

        return arr;
    }

}

module.exports = {
    Screen
}
