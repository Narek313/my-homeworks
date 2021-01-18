const birthday = new Date(2003,2,20);
let today = Date.now();
console.log(today,"iscbsc",birthday)
console.log(Math.floor((today - birthday)/1000/60/60));