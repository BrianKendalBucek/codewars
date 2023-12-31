"use strict";
const stockList = (listOfArt, listOfCat) => {
    if (listOfArt.length === 0 || listOfCat.length === 0) {
        return '';
    }
    const result = [];
    const obj = {
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
    };
    listOfArt.forEach((str) => {
        const firstLetter = str[0];
        const stringSplit = str.split(" ");
        const stringNumber = Number(stringSplit[1]);
        for (const letter in obj) {
            if (firstLetter === letter) {
                obj[letter] += stringNumber;
            }
        }
    });
    listOfCat.forEach((str) => {
        if (Object.keys(obj).includes(str)) {
            // console.log(obj[str])
            result.push(`(${str} : ${obj[str]})`);
        }
        ;
    });
    const final = result.join(' - ');
    // console.log(final);
    return final;
};
// TEST
const first = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const second = ["A", "B", "C", "D"];
// res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";
stockList(first, second);
