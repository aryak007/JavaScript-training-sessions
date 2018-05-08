function foo(something) {
	this.a = something;
}
//foo.prototype.somevalue = 5;
var obj1 = {
	foo: foo
};
var obj2 = {

};
obj1.foo(2); 
console.log( obj1.a); // Q1

obj1.foo.call(obj2,3); 
console.log( obj2.a); 

//var bar = new obj1.foo(4); 
var bar = new obj1.foo(4); 

console.log(obj1.a); // Q2
console.log(bar.a); // Q3

//console.log(obj1.somevalue);// Q4
//console.log(bar.somevalue); // Q5

