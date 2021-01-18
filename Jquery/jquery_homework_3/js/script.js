let myObject = {
	a: {
		one: 1,
		two: 2,
		three: 3
	},
	b: [1, 2, 3]
};
let b =  [1, 2, 3]
let recursiveEncoded = $.param(myObject);
// decodeURIComponent
let recursiveDecoded = decodeURIComponent($.param(myObject));

console.log(recursiveEncoded);
console.log(recursiveDecoded);