// let x = 0;
// for(let i = 2; i < 30; i++){
//     if(i != 10 && i != 20){
//         x += i;
//     }
// }
// console.log(x);

//______________________________________________________________

/*function addNumber(x,y,a,b,c){
    let m = Math.max(x,y,a,b,c);
    let n = Math.min(x,y,a,b,c);
    return m + n;
}
console.log(addNumber(100,-200,450,50,200));*/

//______________________________________________________________

/*function box(){
    for(let x = 0; Math.pow(2,x) <= 1000; x++){
        console.log(Math.pow(2,x));
    }
}
box();*/

//______________________________________________________________

/*function positive(a,b,c,d,e){
    if(Math.sign(a) == 1) console.log(a);
    if(Math.sign(b) == 1) console.log(b);
    if(Math.sign(c) == 1) console.log(c);
    if(Math.sign(d) == 1) console.log(d);
    if(Math.sign(e) == 1) console.log(e);
}
positive(-5,4,82,-79,0);*/

//_______________________________________________________________

/*function getRandom(x,y,z){
    if(typeof x !== "number" || typeof y !== "number") return "sxal arjeq";
    if(Math.abs(x - y) < z) return -1;
    let high = Math.max(x,y);
    let low = Math.min(x,y);
    for(let i = 0; i < z; i++){
        console.log(Math.floor(Math.random()*(high - low + 1) + low));
    }
    return;
}
console.log(getRandom(1,6,5));*/