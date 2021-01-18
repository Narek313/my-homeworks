// Ստեղծել Ֆունկցիա, որը ստանում է "string" արգումենտ և վերադարձնում է միայն առաջին բառը։
// Պայմաններ։ Եթե "string" արգումենտը բաղկացաց է մեկ բառից վերադարձնել այդ բառը։
//  Եթե "string" արգումենտը դատարկ է վերադարձնել «-1»

// let myFunc = s =>{
//     if(typeof s !== "string") return "invalid value";
//     if(s == "")return -1;
//     if(s.split(" ").length >= 1) return s.split(" ")[0];
//     // if(s.split(" ").length == 1)return s;
//     // return s.split(" ")[0];
// }
// console.log(myFunc(""));

//________________________________________________________________________________

// Ստեղծել Ֆունկցիա, որը հայկական դրամը կոնվերտացիա է անում մեր ուզած արժութին համապատասխան(USD,EUR,RUB,GBP):
// Եթե գիտենք,որ
// 1USD = 486դր․, 1EUR = 576 դր․,
// 1RUB = 6.74 դր․, 1GBR = 644 դր․

// let exchange = x => {
//     // return `${x} AMD = ${Math.floor(x/486)} USD, ${Math.floor(x/576)} EUR, ${Math.floor(x/6.74)} RUB, ${Math.floor(x/644)} GBR`;

//     let obj = {
//         USD: Math.floor(x/486),
//         EUR: Math.floor(x/576),
//         RUB: Math.floor(x/6.74),
//         GBR: Math.floor(x/644),
//     }
//     return obj;
// }
// console.log(exchange(1000000));

//________________________________________________________________________________

// Ստեղծել օբյեկտ մարդու տվյալներով։prompt հրամանի միջոցով հարցնել "Թե ինչ տվյալներ եք ուզում իմանալ իմ մասին"
// Տպել համպատասխան արժեքը եթե այն գոյություն ունի, հակառակ դեպքում ասել կրկին փորձեք․․․

// let obj = {
//     name: "Narek",
//     surname: "Galstyan",
//     gender: "male",
//     age: 17,
//     "email address": "narek_galstyan03@mail.ru",
//     "phone number": "099-56-42-96",
// }
// let x = prompt("What information do you want to know about me?");
// if (obj.hasOwnProperty(x)) {
//     console.log(obj[x]);
// } else {
//     console.log("Please try again");
// }