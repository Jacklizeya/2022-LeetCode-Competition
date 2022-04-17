/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var digitSum = function(s, k) {
    while (s.length > k) {
        let countOfSections = Math.ceil(s.length/ k);
        // console.log(countOfSections);
        let newS = "";
        for (let i =0; i < countOfSections; i++) {
            let smallSection = s.substring(i * k, (i+1)*k);
            newS = newS + convertToString(smallSection);
        }
        s = newS;
    }
    return s;
};

function convertToString(smallSection) {
    let result = 0;
    for (let char of smallSection) {
        result += parseInt(char)
    }
    return result.toString();
}

// console.log(digitSum("11111222223", 3))
// console.log(digitSum( "00000000", 3))
// console.log(digitSum( "1234", 2))
