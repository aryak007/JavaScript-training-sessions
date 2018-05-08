

for (var i=1; i<=5; i++) {
	let j = i; 
	setTimeout(function(){
		console.log( j );
	}, j*1000);
}










// var arr = [];
// for (var i=1; i<=5; i++) {
//	let j = i;
// 	let func = function(){
// 		console.log( j );
// 	}
// 	arr.push(func);
// 	setTimeout(func, j*1000);
// }
// console.log(arr);
