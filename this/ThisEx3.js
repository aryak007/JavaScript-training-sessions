function foo(something) {
	this.a = something;
}
var obj1 = {
	foo: foo
};
var obj2 = {
};
obj1.foo(2);
console.log( obj1.a); //Q1
obj1.foo.call(obj2,3);
console.log( obj2.a); //Q2
var newFoo = new obj1.foo(4);    
                                //var newFoo = new foo(4);
console.log(obj1.a);//Q3
console.log(newFoo.a); //Q4
