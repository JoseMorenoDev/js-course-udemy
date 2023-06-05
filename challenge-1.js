/* Write your code below. Good luck! 🙂 */

const calcAverage = (val1, val2, val3) => (val1 + val2 + val3) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);

    } else if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);

    } else {
        console.log("No team wins")
    }
}


checkWinner(scoreDolphins, scoreKoalas);
