/*function opposite(s){
    if(typeof s !== "string"){
        return -1;
    }
    let x = "";
    for(let i = s.length - 1; i >= 0; i--){
        x = x + s[i];
    }
    return x;
}
console.log(opposite(""));*/

//______________________________________________________________________

function digits(x){
    if(typeof x !== "number"){
        return -1;
    }
    let y = String(x)
    for(let i = 0; i < y.length ; i++ ){
        console.log(y[i]);
    }
    return;
}
console.log(digits(145632));

//_______________________________________________________________________

/*function name(a){
    switch(a){
        case "Meri":
        case "Davit":
        case "Sash":
            console.log("Այո, նա մեր խմբից է։");
            break
        case "Narek":
            console.log("Այդ ես եմ։")
            break
        default:
            console.log("Անծանոթ")
    }
}
name("");*/

