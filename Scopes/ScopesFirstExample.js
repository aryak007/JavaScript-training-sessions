var foo = 100; 
function outerFunction(){
	var foo = 200; 
	function innerFunction(foo){
		console.log("Line 5 = "+foo); 
		foo = 300; 
		bam = 400;
		console.log("Line 8 = "+foo); 
	}
	innerFunction(); //JS variatic function
}
outerFunction();
console.log("Line 13 = "+foo); 
console.log("Line 14 = "+bam); 
innerFunction(); //???? 