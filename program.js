function calculateScore(input) {
    let result;
    let inputArray = input.split('|');
    for (let i = 0; i < inputArray.length; i++) {
        chooseMethod(inputArray[i]);
    }

    console.log(result);
}

function chooseMethod(score) {
    let scoreArray = score.split('');
    if (scoreArray.indexOf('X') != -1) {
        calculateStrike();
    } else if (scoreArray.indexOf('/') != -1) {
        calculateSpare();
    } else if (scoreArray.indexOf('-') != -1) {
        calculateMiss();
    }
}

function calculateStrike() {

}
function calculateSpare() {

}
function calculateMiss() {

}


const input = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
calculateScore(input);