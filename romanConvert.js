"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(number) {
    let result = "";
    let changedNumber = number;
    // const symbols: { [key: string]: number } = {
    //   M: 1000,
    //   CM: 900,
    //   D: 500,
    //   CD: 400,
    //   C: 100,
    //   XC: 90,
    //   L: 50,
    //   XL: 40,
    //   X: 10,
    //   V: 5,
    //   IV: 4,
    //   I: 1,
    // };
    // for (const str in symbols) {
    //   let num: number = symbols[str];
    // }
    const equation = (num, str) => {
        while (changedNumber >= num) {
            result += str;
            changedNumber -= num;
        }
    };
    equation(1000, "M");
    equation(900, "CM");
    equation(500, "D");
    equation(400, "CD");
    equation(100, "C");
    equation(90, "XC");
    equation(50, "L");
    equation(40, "XL");
    equation(10, "X");
    equation(5, "V");
    equation(4, "IV");
    equation(1, "I");
    console.log(result);
    return result;
}
exports.solution = solution;
// }
solution(1000);
solution(4);
solution(1);
solution(1990);
solution(2008);
solution(1444);
// assert.strictEqual(solution(1000), 'M')
// assert.strictEqual(solution(4), 'IV')
// assert.strictEqual(solution(1), 'I')
// assert.strictEqual(solution(1990), 'MCMXC')
// assert.strictEqual(solution(2008), 'MMVIII')
// assert.strictEqual(solution(1444), 'MCDXLIV')
