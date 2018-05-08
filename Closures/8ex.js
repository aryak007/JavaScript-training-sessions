function outer() {
    var inner = function() 
    { 
      console.log(x); 
    }
    var x = 100;
    return inner;
}
outer()(); //Q1. What will be the output of this example?
// var x = outer();
// x();