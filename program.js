function calculateScore(input) {
    let result;
    let inputArray = input.split('|');
    let resultScore = [];
    for (let i = 0; i < inputArray.length; i++) {
        resultScore.push(frameScore(inputArray[i]));
    }
    let elevenArr = deleteSpace(resultScore);
    let finalFrameScore = getFinalFrameScore(elevenArr);
    result = getScore(finalFrameScore);
    console.log(result);
}
function getScore(finalFrameScore) {
    let result = 0;
    for (let i = 0; i < finalFrameScore.length - 1; i++) {
        result += finalFrameScore[i];
    }
    return result;

}
function getFinalFrameScore(elevenArr) {
    let finalFrameScore = [];
    for (let i = 0; i < elevenArr.length; i++) {
        if (elevenArr[i] === 10) {
            if (Array.isArray(elevenArr[i + 1])) {
                finalFrameScore.push(10 + elevenArr[i + 1][2]);
            } else {
                if (Array.isArray(elevenArr[i + 2])) {

                    finalFrameScore.push(10 + 10 + elevenArr[i + 2][0]);
                } else {
                    finalFrameScore.push(10 + 10 + 10);
                }
            }

        } else if (Array.isArray(elevenArr[i])) {
            if (elevenArr[i][2] === 10 && Array.isArray(elevenArr[i + 1])) {
                finalFrameScore.push(10 + elevenArr[i + 1][0]);
            } else if (!Array.isArray(elevenArr[i + 1]) && elevenArr[i + 1] != -1 && elevenArr[i][2] === 10) {

                finalFrameScore.push(elevenArr[i][2] + elevenArr[i + 1]);
            } else {
                finalFrameScore.push(elevenArr[i][2]);
            }
        } else if (elevenArr[i] === -1) {
            finalFrameScore.push([0, 0, 0]);
        } else {

            finalFrameScore.push([elevenArr[i] - 0, 0, elevenArr[i] - 0]);
        }
    }
    return finalFrameScore;

}
function deleteSpace(resultScore) {

    let elevenArr = [];
    for (let i = 0; i < resultScore.length - 2; i++) {
        elevenArr[i] = resultScore[i]
    }
    elevenArr[resultScore.length - 2] = resultScore[resultScore.length - 1];
    return elevenArr;
}
function frameScore(frame) {
    let frameIndex = frame.split('');
    if (frameIndex.length === 1) {
        if (frameIndex[0] === 'X') {
            return 10;
        } else {
            return frameIndex[0] - 0;
        }
    } else if (frameIndex.length === 2) {
        if (frameIndex[1] === '/') {
            return [frameIndex[0] - 0, 10 - frameIndex[0], 10]
        } else if (frameIndex[0] === '-') {
            return [0, frameIndex[1] - 0, frameIndex[1] - 0];
        } else if (frameIndex[1] === '-') {
            return [frameIndex[0] - 0, 0, frameIndex[0] - 0];
        } else if (frameIndex[0] === 'X' && frameIndex[1] === 'X') {
            return [10, 10, 20];
        }
        else {
            return [frameIndex[0] - 0, frameIndex[1] - 0, (frameIndex[0] - 0) + (frameIndex[1] - 0)];
        }

    } else {
        return -1;

    }
}

let input1 = '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5';
let input2 = 'X|X|X|X|X|X|X|X|X|X||XX';
let input3 = '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||';
let input4 = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
calculateScore(input1);
calculateScore(input2);
calculateScore(input3);
calculateScore(input4);