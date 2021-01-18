//1. Գտնել <li> թեգերի մեջ գրված բոլոր տեքստերը, (լսարանում արեցինք), սարքել <p> թեգ և այդ գտած տեքստը դնել նրա մեձ, ու ավելացնել էջում

// $(function(){ 
// let text = $("li").text()
// document.createElement("p")
// $("p").html(function(){
//     return text
// })
// })

//2. ՈՒնենալ կոճակ, որի վրա սեղմելուց հետո էջում առկա  P թեգերին kavelana "info" կլասը, բացի այն <p> -ից որոնք ունեն "wrap"  կլասը

// $(function(){
//     function change(){
//         $("p").addClass(function(i,old){
//             if(old == "wrap") return ""
//             return "info"
//         })
//     }
//     $("#btn").on("click",change)
// })

//3. Գրել ֆունկցիա, որը կգտնի երկու զանգվածների չկրկնվող էլեմենտները

// const array1 = ["html","css","Javascript","jQuery","React.js"]
// const array2 = ["Javascript","document","React.js","css","Node.js"]
// function name(arr1,arr2){
//     let a = arr1.filter(elem => !arr2.includes(elem))
//     let b = arr2.filter(elem => !arr1.includes(elem))
//     return a.concat(b)
// }
// console.log(name(array1,array2))

//4. Տրված է նախադասությունը գտնել այդ նախադասության մեջի ամենաերկար բառը

// function long(s){
//     let arr = s.split(" ")
//     let arr1 = []
//     for(let i = 0;i < arr.length; i++){
//         arr1.push(arr[i].length)
//     }
//     let m = Math.max.apply(Math,arr1)
//     return arr.filter(elem => elem.length == m)
// }
// console.log(long("Lorem ipsum dolor sit amet consectetur adipisicing elit"))