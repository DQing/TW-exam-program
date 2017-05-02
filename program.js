function calculateScore(input) {
    let result = 0;
    let inputArray = input.split('|');
    for (let i = 0; i < inputArray.length - 2; i++) {
        result = chooseMethod(inputArray[i], result, inputArray);
    }

    console.log(result);
}

function chooseMethod(score, result, inputArray) {
    let scoreArray = score.split('');

    if (scoreArray.indexOf('X') != -1) {
        return calculateStrike(result, inputArray);
    } else if (scoreArray.indexOf('/') != -1) {
        return calculateSpare(result, inputArray);
    } else if (scoreArray.indexOf('-') != -1) {
        return calculateMiss(result, inputArray);
    }
    return result;
}

function calculateStrike(result, inputArray) {
    result = result + 20;
    return result;
}
function calculateSpare(result, inputArray) {
    result = result + 1;
    return result;

}
function calculateMiss(result, inputArray) {
    result = result + 1;
    return result;


}


const input = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
calculateScore(input);
