for (let i=1; i<=5; i++) {
	setTimeout(function(){
		console.log( i );
	}, i*1000);
}






var arr = [];
for (var i=1; i<=5; i++) {
	let func = function(){
		console.log( i );
	}
	arr.push(func);
	setTimeout(func, i*1000);
}
console.log(arr);



