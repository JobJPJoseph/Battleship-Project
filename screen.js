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

}

module.exports = {
    Screen
}
