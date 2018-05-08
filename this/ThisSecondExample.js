//Global 

console.log("------Using global object------");
function greet(name) {
    console.log('Hello ' + name);
    //console.log(this);
}
greet('Santu Dhara');

//Object call
console.log("------Preceeding dot call / Implicit Binding------");
var greet = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(this.greeting + name);
        //console.log(this);
    }
}
greet.speak('Santu Dhara');

//new keyword
console.log("------Using new keyword------")
function GreetMe(name) {

    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
    }
};

var greetDhara = new GreetMe('Santu Dhara');
var greetAryak = new GreetMe('Aryak Sengupta');
greetDhara.speak();
greetAryak.speak();


console.log("------Hard Binding/ Explicit Binding with call/apply------")
GreetMe.prototype.sayGoodbye = function(name) {
    console.log('Goodbye ' + this.name);
    //console.log(this);
};

greetDhara.sayGoodbye.call(greetAryak);
greetAryak.sayGoodbye.apply(greetDhara);
