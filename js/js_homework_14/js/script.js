// Stexcel object vorum ka passvord hatkutyun... aynpes anel vor drsic atd hatkutyuny hanchelis generacvi patahakan bar ev tpvi da, irakan password-i poxaren, hnaravor chlini ajn poxel ev jnjel

// "use strict";

// const obj = {
//     get password(){
//         return Math.random().toString(36).slice(-8);
//     }
// }
// Object.defineProperty(obj,'_password',{
//     value:"narek2003"
// })
// console.log(obj.password);

//_______________________________________________________________________________

// Ստեղծել Ֆունկցիա, որը ստանում է թվաին  զանգված։Բարձրացնում է այդ թվերը խորանարդ և վերադարձնում է ստացված թվերից միայն >1000 –ից թվերը

// const array1 = [4, 55, 29, 18, 6, 45, 10, 14, 5];
// const func1 = arr => {
//     let x = arr.map(elem => Math.pow(elem, 3));
//     return x.filter(elem => elem > 1000);
// }
// console.log(func1(array1));

//_______________________________________________________________________________

// ՈՒնենալ թվերով զանգված, ստանալ այդ բոլոր թվերի 15%-ը առանձին զանգվածով, հետո ստուգել կա արդյոք գոնե 1 թվի այնպիսի տոկոս, որը մեծ է 100-ից

// const array2 = [45, 895, 56, 47, 23, 58, 78, 100, 69];
// const func2 = arr => {
//     let x = arr.map(elem => Math.round(elem * 0.15));
//     let y = x.find(elem => {
//         return elem > 100;
//     })
//     return y;
// }
// console.log(func2(array2));



//_______________________________________________________________________________

// Տրված Է նախադասություն, գրել կոդ, որը այդ նախադասության մեջից վերադարձնում է 1 պատահական բառ։

// let nax = "  Lorem ipsum dolor sit amet consectetur adipisicing elit  ";
// const func = x => {
//     let arr = x.trim().split(" ");
//     let random_word  = arr[Math.floor(Math.random() * arr.length)];
//     return random_word;
// }
// console.log(func(nax));