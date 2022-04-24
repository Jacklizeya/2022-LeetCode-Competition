// I missed some edge cases

/**
 * @param {number[][]} circles
 * @return {number}
 */
 var countLatticePoints = function(circles) {

    function addToSet(circle, set) {
        // console.log("Entering add to set");
        let x = circle[0];
        let y = circle[1];
        let r = circle[2];
        // console.log(circle, set, x, y, r);
        for (let j = -r; j <= r; j++) {
            let fluctuation = r - Math.abs(j);
            for (let i = x - fluctuation; i <= x + fluctuation; i++) {
                // console.log(i, y + j);
                set.add(i + " " + (y + j))
            }
        }
    }

    let set = new Set();
    circles.forEach(circle => addToSet(circle, set))
    console.log(set);
    return set.size;
};

console.log(countLatticePoints( [[8,9,6],[9,8,4],[4,1,1],[8,5,1],[7,1,1],[6,7,5],[7,1,1],[7,1,1],[5,5,3]], {}));
