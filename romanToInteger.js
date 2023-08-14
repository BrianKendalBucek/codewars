"use strict";
function solution(roman) {
    const stringToArray = roman.split('');
    let total = 0;
    for (let i = 0; i < stringToArray.length; i++) {
        const currentChar = stringToArray[i];
        const nextChar = stringToArray[i + 1];
        if (currentChar === 'I' && nextChar !== 'V') {
            total += 1;
        }
        if (currentChar === 'I' && nextChar === 'V') {
            total -= 1;
        }
        if (currentChar === 'V') {
            total += 5;
        }
        if (currentChar === 'X') {
            total += 10;
        }
        if (currentChar === 'L') {
            total += 50;
        }
        if (currentChar === 'C') {
            total += 100;
        }
        if (currentChar === 'D') {
            total += 500;
        }
        if (currentChar === 'M') {
            total += 1000;
        }
    }
    return total;
    // console.log(total)
}
solution('IV');
