// const xhr = new XMLHttpRequest();
// xhr.open('GET', '../data/data.txt', true);
// console.log("xhr:",xhr);

// xhr.onload = function(){
// 	if (xhr.status == 200) { //ստուգում ենք ստատուսը,
// 		let r = document.getElementById('root');
// 		r.textContent = xhr.responseText;
// 		console.log("xhr.responseText:", xhr.responseText);
// }}
// xhr.send(null);

//  const xhr2 = new XMLHttpRequest();
//  xhr2.open('GET', '../data/users.json', true);
//  console.log("xhr2:",xhr2)
//  xhr2.onload = function () {
// 	if (xhr2.status == 200) {
// 		let r2 = document.getElementById('root');
// 		let result = JSON.parse(xhr2.responseText);
// 		console.log("xhr2.responseText:JSON ", xhr2.responseText)
// 		console.log("result: ", result)
// 		r2.append(result.users[1].name);
// 	}
// }
// xhr2.timeout = 2000
// xhr2.onerror = function () {
// 	console.log('Request error...');
// }
//   xhr2.send(null);

const xhr = new XMLHttpRequest();
xhr.open('GET','../data/data.json',true);
console.log(xhr)
xhr.onload = function () {
    if(xhr.status == 0){
        let r = document.getElementById("root");
        r.textContent = xhr.responseText;
        console.log("xhr.responseText:", xhr.responseText);
    }
}
xhr.onerror = function () {
	console.log('Request error...');
}
xhr.send(null);