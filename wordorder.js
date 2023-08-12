"use strict";
function order(words) {
    const regex = /[0-9]/;
    const orderedNumberStrings = [];
    const resultArray = [];
    for (const char of words) {
        if (regex.test(char) === true) {
            orderedNumberStrings.push(char);
        }
    }
    const stringToNumbers = orderedNumberStrings.map(Number);
    const sortedNumbers = stringToNumbers.slice().sort((a, b) => a - b);
    const numbersToString = sortedNumbers.toString();
    const wordArray = words.split(" ").map((str) => str.trim());
    for (const digit of numbersToString) {
        for (const word of wordArray) {
            if (word.includes(digit)) {
                resultArray.push(word);
            }
        }
    }
    const result = resultArray.join(" ");
    return result;
}
order("4of Fo1r pe6ople g3ood th5e the2");
