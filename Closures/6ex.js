function outerFunction () {
    var nameIntro = "The name is ";

   function innerFunction (name) {
        return nameIntro + " " +name;
    }
    return innerFunction;
}
var myName = outerFunction();
myName("Aryak"); 

