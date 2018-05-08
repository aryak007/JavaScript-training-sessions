var outerFunction = function() {
    if (true) {
        var x = 5;
        console.log(y); 
    }
    var innerFunction = function() {
        if (true) {
            var y = 7;
            console.log(x);
        }
        if (true) {
            console.log(y);
        }
    }
    innerFunction();
}
outerFunction();