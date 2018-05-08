var a = 300;
function outer() {
	var a = 100;
    //var b = 200;
	function inner() {
		console.log(a+b);
	}
	var b = 200;
	return inner;
}
var obj = outer();
obj();
