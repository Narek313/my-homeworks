// 1.(Qani hat tiv, inch mijakayqov iraric tarberven, sksac vor tvic hashvark@ lini)ete verjin tiv@ chlini, default sksi 0-ic

// let f = (qanak,qayl,start = 0) => {
//     const arr = [];
//     for(let i = 0; i < qanak; i++){
//         arr.push(start + i * qayl);
//     }
//     return arr;
// }
// console.log(f(4,8,7));


// let f = (qanak,qayl,start = 0) => {
//     let timer = 0;
//     for(let i = 0 ; i < qanak;i++){
//         setTimeout(() => {
//             console.log(start + i * qayl);
//         },timer+=1000)
//     }
// }
// f(4,8,7);

//________________________________________________________________

// 2.(qani hat tar/simvol lini, vor simvolneric miain random @ntrvi, qani angam arajin u 2rd hraman@ katarvi)

// let interval = setInterval(()=> {
//     let f2 = (qanak, str) => {
//         let array = [];
//         for (let i = 0; i < qanak; i++) {
//             array.push(str.charAt(Math.floor(Math.random() * str.length)));
//         }
//         return array.join("");
//     }
//     console.log(f2(5, "abcdef0123456789"))
// },1000)
// setTimeout(() => {
//     clearInterval(interval)
//     console.log("stop")
// }, 2000);

//________________________________________________________________

// function name(params) {
//     if(typeof params !== "string")return "sxal arjeq";
//     return function(p){
//         while(params.includes(p)){
//         let x = params.indexOf(p);
//         return params.split("").splice(x,p.length).join("");
//     }}
// }
// let nax = name('nodejs reactjs');
// console.log(nax("js"));