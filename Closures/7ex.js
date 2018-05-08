function outer(){
	var outerVariable = 100;
	function inner(){
		console.log(outerVariable);
	}
	anotherFunction(inner);
}
function anotherFunction(inner){
	inner(); //Q1. What is happening over here? 
}
outer() //Q2. What will be the output?
