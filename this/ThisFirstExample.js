//"use strict";
function foo(){
	console.log(this.bar);
	return;
}
var bar = "bar1";
var o2 = { 
	bar:"bar2",
	foo:foo
};
var o3 = { 
	bar:"bar3",
	foo:foo
};
foo(); //default binding - If in strict mode, default will make the call result undefined. If not, it will print bar1.//https://stackoverflow.com/a/19850326/2309841 
o2.foo(); 
o3.foo();