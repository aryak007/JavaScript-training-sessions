var a = 200;
function outer() {
	var a = 100;
	function inner1() {
		var b = 100;
		var inner2 = function inner2(){
			console.log(a+b);
		}
		return inner2;
	}
	return inner1;
}
var foo1 = outer()();
foo1();
console.dir(foo1);
var foo2 = outer();
console.dir(foo2);