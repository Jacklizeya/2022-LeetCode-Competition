/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
 var findWinners = function(matches) {
    let losingCount = {}
    for (let match of matches) {
        let winner = match[0];
        let loser = match[1];
        if (!losingCount[winner]) {losingCount[winner] = 0} 
        if (!losingCount[loser]) {losingCount[loser] = 1} else {losingCount[loser]++}
    }

    let neverLosingArray = [];
    let losingOnceArray = [];
    for (let player in losingCount) {
        if (losingCount[player] === 0) { neverLosingArray.push(player)}
        else if (losingCount[player] === 1) {losingOnceArray.push(player)}
    }
    return [neverLosingArray, losingOnceArray];
};
