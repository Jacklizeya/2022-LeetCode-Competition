/**
 * @param {number[]} tasks
 * @return {number}
 */
 var minimumRounds = function(tasks) {
    let countStorage = {}
    for (let task of tasks) {
        if (!countStorage[task]) {countStorage[task] = 1} else {countStorage[task]++}
    }   

    let result = 0
    for (let key in countStorage) {
        let count = countStorage[key];
        if (count <=1 ) {return -1} else {
            result += Math.ceil(count/ 3);
        }
    }
    return result;
};

console.log( minimumRounds([2,2,3,3,2,4,4,4,4,4]))
console.log( minimumRounds([2,3,3]));
