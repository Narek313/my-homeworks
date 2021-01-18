function myFunction(x = 1, y = 10){    
    let a = [];
    let low = Math.min(x,y);
    let high = Math.max(x,y);
    for( let i = low; i <= high; i++){
        a.push(i);
    }
    // console.log(a);
    
    //____________________________________________

    // console.log(a.shift() + a.pop());

    //____________________________________________

    // let gumar = 0;
    // let qanak = a.length;
    // for( let i = 0; i < a.length; i++){
    //     gumar += a[i];
    // }
    // console.log(gumar / qanak);

    //____________________________________________

    // a.push(a.shift());
    // console.log(a);
}
myFunction(10,15);
