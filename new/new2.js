function Foo(who){
    this.me = who;
}

Foo.prototype.identify = function(){
    return "I am "+this.me;
}
//Foo.prototype.santuDhara = "Present";

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a2.speak = function(){
    console.log("Hello!! "+this.identify());
}
console.log(a1.constructor === Foo)
console.log(a1.constructor === a2.constructor);
console.log(a1.__proto__ === Foo.prototype);
console.log(a1.__proto__ === a2.__proto__);

a1.__proto__.printThing = function(){
    console.log("Print something");
}
a2.printThing();

//Shadowing.....
// a1.identify = function(){
//     console.log("Hi, "+Foo.prototype.identify.call(this));
// }



// function Bar(who){
//     Foo.call(this,who);
// }

// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.speak = function(){
//     console.log(this.identify());
// }

// var b1 = new Bar();
// var b2 = new Bar();

// b1.speak();
// b2.speak();