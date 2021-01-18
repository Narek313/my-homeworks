// Ստեղծել ֆունկցիա, որը ստանում է զանգված և թիվ,՝ ջնջում է զանգվածի սկզբից նշված թվով Էլեմենտներ Օր․՝
// drop([1, 2, 3], 2);// => [3]  կամ drop([1, 2, 3], 0); => [1, 2, 3],

// const drop = (arr,x) =>{
//     return arr.slice(x);
// }
// console.log(drop([1,2,3,4,5,],3))

//_________________________________________________________________________________

// Ստեղծել Ֆունկցիա, որը ստանում է զանգված։Ստուգում է եթե այդ զանգվածը թվային է` ապա բոլոր թվերը դարձնում է դրական և վերադարձնում է ։

// const array = [1, -2, 3, -4, 5];
// const make_positive = arr => {
//     if (arr.some(elem => typeof elem !== "number")) return -1;
//     const abs_value = arr.map(elem => {
//         if (elem < 0) return Math.abs(elem);
//         return elem;
//     })
//     return abs_value;
// }
// console.log(make_positive(array));

//_________________________________________________________________________________

// Ունենալ Օբյեկը խառը տվյալներով, այդ օբյեկտի բոլոր "number"-տիպի արժեք պարունակող "key"-ը ջնջել /հանել այդ օբյեկտից և պահպանել մեկ այլ օբյեկտի մեջ։Ավարտին արտածել այդ 2 օբյեկտները քոնսոլում

// 'use strict';
// const obj = {
//     name: "Narek",
//     surname: "Galstyan",
//     age: 17,
//     year: 2003,
//     month: "March",
//     day: 20
// };
// const obj2 = {};
// let arr = Object.keys(obj);
// for (let i = 0; i < arr.length; i++) {
//     if (typeof obj[arr[i]] === "number") {
//         obj2[arr[i]] = obj[arr[i]];
//         delete obj[arr[i]];
//     }
// }
// console.log(obj);
// console.log(obj2);