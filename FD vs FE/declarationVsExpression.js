var foo = function bar(){
	var foo = 100; 
	console.log(foo);
	function baz(foo){
		foo = bar;
		console.log(foo);
	}
	baz(); 
}
foo();
bar();