/**
 * @param {number[][]} nums
 * @return {number[]}
 */
 var intersection = function(nums) {
    let numCount = {};
    for (let numArray of nums) {
        for (let num of numArray) {
            if (!numCount[num]) {
                numCount[num] = 1;
            } else {numCount[num]++;}
        }
    }

    let sortedDuplicates = [];
    for (let key in numCount) {
        if (numCount[key] === nums.length) {sortedDuplicates.push(parseInt(key));}
    }
    sortedDuplicates.sort((a, b)=>{return a - b});
    return sortedDuplicates;
};
