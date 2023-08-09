"use strict";
function tribonacci([a, b, c], n) {
    let first = 0;
    let second = 1;
    let third = 2;
    let initialArray = [a, b, c];
    for (let i = 0; i < initialArray.length; i++) {
        if (n === 0) {
            return [];
        }
        if (n === 1) {
            return [initialArray[n - 1]];
        }
        if (n === 2) {
            return [initialArray[n - 2], initialArray[n - 1]];
        }
        if (initialArray.length < n) {
            //   add the three initial numbers together to get the following number
            const added = initialArray[first] + initialArray[second] + initialArray[third];
            //   add this number to the end of the array
            initialArray.push(added);
            // calculate next 3 numbers
            first++;
            second++;
            third++;
        }
    }
    return initialArray;
}
const test = tribonacci([1, 1, 1], 10);
console.log(test);
