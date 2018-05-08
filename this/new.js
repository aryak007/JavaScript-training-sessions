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
