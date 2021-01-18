// 1.   Ունենալ ֆունկցիա,որը ստանալով զանգված ասում է թե քանի "boolean” տրպի էլեմենտներ կան փոխանցված զանգվածում

// const arr = [false, 56, "apple", true, 0, false, true, 4];
// let bool = x => x.filter(elem => typeof elem === "boolean").length;
// console.log("boolean:", bool(arr));

//______________________________________________________________________________

// 2. Գրել կոդ, որը կտպի կամայական զանգվածի 5-10 ինդեքսների էլեմենտները, իրարից բաժանված "-"-ով

// const arr = [3,"ng",47,56,true,"Javascript",2020,"Python",true,25,111,"sjsh",45,false];
// let f = x => {
//     if(Array.isArray(x)){
//       return x.slice(5,11).join("-");
//     }
//     return "x is not an array";
// }
// console.log(f(arr));

//______________________________________________________________________________

// HTML-ում ունենալ 5 հատ div,որոնք ունեն կլաս, քոնսոլում տպել այդ բոլոր կլասները

// let a = document.getElementsByTagName("div");
// console.log(a);

//______________________________________________________________________________

// HTML-ում ունենալ 10 հատ <li> ունենալ նաև զանգված կամայական 10 էլեմենտեներով, փորձել <li>-րի մեջ տեղադրել այդ զանգվածի արժեքները

// const arr = ["red","blue","orange",45,true,"white",89,false,"black",55];
// let x = document.getElementsByTagName("li");
// for(let i = 0; i < 10; i++){
//     x[i].textContent = `${arr[i]}`;
// }