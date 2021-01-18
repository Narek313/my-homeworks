//1. Տրված Է նախադասություն: Շրջել միայն 5 և ավելի տառ պարունակող բառերը:

// let fn = str => {
//     if(typeof str !== "string")return -1;
//     if(str.length < 5)return "tveq aveli erkar bar";
//     return str.split("").reverse().join("");
// }
// console.log(fn("JavaScript"));

//2. Տրված է նախադասություն։ ։արտածել նախադասության մեջ,օգտագործած տառերը մեկ զանգվածի մեջ, առանց կրկնությունների։(օր․՝ «Աննա» => [“ա”, “ն”])

// let fn2 = str => {
//     if (typeof str !== "string") return -1;
//     const arr = str.trim().split(" ").join("");
//     return Array.from(new Set(arr));
// }
// console.log(fn2("  Հայաստան ասելիս ծնկներս ծալվում են"));

//3. Ունենալ Օբյեկը խառը տվյալներով, այդ օբյեկտի բոլոր "number"-տիպի արժեք պարունակող "key"-ը ջնջել /հանել այդ օբյեկտից և պահպանել մեկ այլ օբյեկտի մեջ։Ավարտին արտածել այդ 2 օբյեկտները քոնսոլում

// const obj = {
//     name: "Narek",
//     surname: "Galstyan",
//     age: 17,
//     year: 2003,
//     month: "March",
//     day: 20
// };
// const obj2 = {};
// const arr = Object.keys(obj);
// for (let i = 0; i < arr.length; i++) {
//     if (typeof obj[arr[i]] === "number") {
//         obj2[arr[i]] = obj[arr[i]];
//         delete obj[arr[i]];
//     }
// }
// console.log(obj);
// console.log(obj2);

//4. ՈՒնենալ Զանգված, որը իր հերթին իր մեջ ունի ևս 5 զանգված,որտեղ կան միայն թվեր,ստուգել արդյոք այդ բոլոր զանգվածների մեջ կան 0-9 թվերը,եթե այո վերադարձնել true/false

// const arr = [[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]]
// let fn4 = () => {
//     if()
//     for(let i = 0;i < arr.length;i++){
//     for(let j = 0; j <= 9;j++){
//         arr[i].includes(j)
//     }
// }
// }
// console.log(fn4())

//5. ՈՒնենալ թվային զանգված և տպել այդ զանգվածի 2-րդ ամենամեծ թիվը

// const array = [5,45,9,2,723,41,233,555,723]
// let fn5 = arr => {
//     const biggest = Math.max.apply(Math,arr)
//     while(arr.includes(biggest)){
//     arr.splice(arr.indexOf(biggest),1)
//     }
//     return Math.max.apply(Math,arr)
// }
// console.log(fn5(array))