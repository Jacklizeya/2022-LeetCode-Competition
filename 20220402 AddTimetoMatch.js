/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
        let currentHour = parseInt(current.split(":")[0]);
    let currentMinute = parseInt(current.split(":")[1]);
    let currentMinuteFromZero = currentHour * 60 + currentMinute;


    let correctHour = parseInt(correct.split(":")[0]);
    let correctMinute = parseInt(correct.split(":")[1]);
    let correctMinuteFromZero = correctHour * 60 + correctMinute;

    var minutesDifference = correctMinuteFromZero - currentMinuteFromZero;
    // console.log("minutesDifference", minutesDifference);


    let count = 0;
    let gaps = [60, 15, 5, 1];
    for (let i =0; i < gaps.length; i++) {

        if (minutesDifference === 0) {break;}
        // console.log("minutesDifference", minutesDifference);
        let number = Math.floor(minutesDifference / gaps[i]);
        minutesDifference = minutesDifference - number * gaps[i];
        count += number;

    }

    return count;
};
