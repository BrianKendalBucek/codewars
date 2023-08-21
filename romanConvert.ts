export function solution(number: number): string {
  let result = "";
  let changedNumber = number;

  const symbols: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (const str in symbols) {
    let num: number = symbols[str];

    while (changedNumber >= num) {
      result += str;
      changedNumber -= num;
    }
  }
  return result;
  
}

solution(1000);
solution(4);
solution(1);
solution(1990);
solution(2008);
solution(1444);
