// ՈՒնենալ զանգված, տպել տե քանի "boolean, number, string" տիպի արգումենտներ կան այդ զանգվածում

// const arr = [25,"Javascript",45,"html",true,false,2,99,"css",451];
// let number = arr.filter(elem => typeof elem === "number").length;
// let string = arr.filter(elem => typeof elem === "string").length;
// let boolean = arr.filter(elem => typeof elem === "boolean").length;
// console.log("number:", number);
// console.log("string:", string);
// console.log("boolean:", boolean);

//_____________________________________________________________________

// Հաշվել միայն թվային զանգվածի դրական թվերի գումարը, օգտագործելով ES6 մեթոդներ։

// const arr = [10,-45,0,9,45,-12,6,40,-66];
// let sum = arr => {
//     if(arr.every(elem => typeof elem === "number")){
//         let func = arr.reduce((a,b) => {
//             if(a > 0 && b > 0) return a + b;
//         })
//         return func;
//     }
//     return "voch tvayin zangvac";
// }
// console.log(sum());

//_____________________________________________________________________

// Տրված է երկնիշ թիվ
// console-ում արտածել այդ թվի թվանշանների գումարը
// Ստուգեք, արդյո՞ք այդ թվի թվանշանները իրար հավասար են

// let f = x => {
//     if(typeof x !== "number"){return "invalid value";}
//     if(x >= 10 && x < 100){
//     let arr = String(x).split("").reduce((a,b) =>{
//         console.log((+a) + (+b));
//          return a == b;
//         });
//     return arr;}
//     return -1;
// }
// console.log(f(45));

//_____________________________________________________________________

// Գտնել զանգվածի բոլոր կենտ էլեմենտները և փոխարինել նրանք "false”-ով

// const arr = [12,15,3,84,66,33];
// let f = arr.map(elem => {
//     if(elem%2 == 1){
//         return false;
//     }
//     return elem;
// })
// console.log(f);
