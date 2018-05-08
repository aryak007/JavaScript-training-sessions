function Foo(who){
    this.me = who;

    this.welcome = "Welcome to Session 7";
    //var x = 5;
}
Foo.prototype.identifyMe = function(){
    return "I am "+this.me;
}

//Foo.prototype.santuDhara = "Present";
var a1 = new Foo("a1");
var a2 = new Foo("a2");

a2.speak = function(){
    console.log("Hello!! "+this.identifyMe());
}
//console.log("X = "+a2.x);
// console.log(a1.constructor === Foo)
// console.log(a1.constructor === a2.constructor);
// console.log(a1.__proto__ === Foo.prototype);
// console.log(a1.__proto__ === a2.__proto__);

// a1.__proto__.printSomeThing = function(){
//     console.log("Print something");
// }

// a2.printSomeThing();

// //Shadowing Question.....

// // a1.identifyMe = function(){
// //     console.log("Hi, "+this.identifyMe());
// // }

a1.identifyMe = function(){
    Foo.prototype.me = "Aryak"
    console.log("Hi, "+Foo.prototype.identifyMe());
}

  a1.identifyMe();


//Child Object Question..........


function FooChild(who){
    //Foo.call(this,who);
}
FooChild.prototype = new Foo();
//FooChild.prototype = Object.create(Foo.prototype);

FooChild.prototype.speak = function(){
    console.log(this.identifyMe());
}

var fC1 = new FooChild("Foo child 1st");
var fC2 = new FooChild("Foo child 2nd");

fC1.speak();
fC2.speak();
fC1.identifyMe();

console.log(fC1.hasOwnProperty("identifyMe"));

console.log(FooChild.prototype.hasOwnProperty("me"));
console.log(FooChild.prototype.hasOwnProperty("welcome"));




//Ways to get prototype

// console.log(Object.getPrototypeOf(a1)===a1.__proto__);
// console.log(a1.constructor.prototype===a1.__proto__);


