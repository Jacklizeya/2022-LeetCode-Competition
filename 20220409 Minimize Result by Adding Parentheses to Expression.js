/**
 * @param {string} expression
 * @return {string}
 */
 var minimizeResult = function(expression) {
    let index = expression.indexOf("+");
    let minNumber = Infinity;
    let returnString = ""

    for (let left = 0; left <= index - 1; left ++) {
        for (let right = index + 2; right <= expression.length; right++) {

            let leftMultiplier = expression.slice(0, left);
            if (leftMultiplier.length === 0) {leftMultiplier = 1} else {leftMultiplier = parseInt(leftMultiplier)}
            let leftAdd = expression.slice(left, index);
 
            leftAdd = parseInt(parseInt(leftAdd))
            let rightAdd = expression.slice(index + 1, right);
            rightAdd = parseInt(parseInt(rightAdd))

            let rightMultiplier = expression.slice(right, expression.length)
            if (rightMultiplier.length === 0) {rightMultiplier = 1} else {rightMultiplier = parseInt(rightMultiplier)}
        
            let calculated = leftMultiplier * (leftAdd + rightAdd) * rightMultiplier
            // console.log(calculated)
            if (calculated < minNumber) {
                minNumber = calculated; 
                leftMultiplier = left === 0 ? "" : leftMultiplier;
                rightMultiplier = right === expression.length ? "" : rightMultiplier;
                returnString = leftMultiplier + "(" + leftAdd +  "+" + rightAdd + ")" + rightMultiplier };
        }
    }
    return  returnString;
};

// console.log(minimizeResult("247+38"))
