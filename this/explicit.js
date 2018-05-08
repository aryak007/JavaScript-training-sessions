function GreetMe(name) {
    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
    }
};
console.log("------Hard Binding/ Explicit Binding with call/apply------")

GreetMe.prototype.sayGoodbye = function(name) {
    console.log('Goodbye ' + this.name);
    //console.log(this);
};
var greetDhara = new GreetMe('Santu Dhara');
var greetAryak = new GreetMe('Aryak Sengupta');

greetDhara.sayGoodbye.call(greetAryak);
greetAryak.sayGoodbye.apply(greetDhara);

var bindedDhara = greetDhara.sayGoodbye.bind(greetDhara)
bindedDhara();

//  var bindedDhara = greetDhara.speak.bind(greetAryak)
//  bindedDhara();
