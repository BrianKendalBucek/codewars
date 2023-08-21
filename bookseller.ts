const stockList = (listOfArt:string[], listOfCat:string[]):string => {

  interface StringNumberObject {
    [key: string]: number;
  }

  const obj: StringNumberObject = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0
  }

  listOfArt.forEach((str) => {

    const firstLetter: string = str[0];
    const stringSplit: string[] = str.split(" ");
    const stringNumber: number = Number(stringSplit[1]);

    for (const letter in obj) {
      if (firstLetter === letter) {
        obj[letter] += stringNumber;
      }
    }
  })

  listOfCat.forEach((str) => {
    if (Object.keys(obj).includes(str)) {
      console.log(obj[str])
    };
  })

  

  // console.log(obj);

  return "...";
}




// TEST
const first: string[] = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const second: string[] = ["A", "B", "C", "D"];
// res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";
stockList(first, second);