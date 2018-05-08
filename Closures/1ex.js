var a = 200;
function outer() {
	var a = 100;
	function inner() {
		console.log(a); 
	}
	inner();
}
outer();








//Lexical Scope