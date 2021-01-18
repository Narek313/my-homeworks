// let f = () => {
//     const str = "abcdef0123456789";
//     const qanak = 6;
//     const array = [];
//     for (let i = 0; i < qanak; i++) {
//         array.push(str.charAt(Math.floor(Math.random() * str.length)));
//     }
//     return `#${array.join("")}`;
// }
// let fn = () => {
//     const body = document.body
//     body.style.backgroundColor = f();
// }
// const button = document.getElementById("btn");
// button.addEventListener("click", fn, false);

//________________________________________________________________________________

// const r = localStorage.getItem("color");
// if(r){
//     const body = document.body;
//     body.style.backgroundColor = r;
// }
// let f = () => {
//     const str = "abcdef0123456789";
//     const qanak = 6;
//     const array = [];
//     for (let i = 0; i < qanak; i++) {
//         array.push(str.charAt(Math.floor(Math.random() * str.length)));
//     }
//     const x = `#${array.join("")}`;
//     localStorage.setItem("color", x);
//     const body = document.body;
//     body.style.backgroundColor = x;
// }
// const button = document.getElementById("btn");
// button.addEventListener("click", f, false);