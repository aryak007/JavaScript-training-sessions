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

