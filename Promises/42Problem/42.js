//Compare it with the 42.js example of the callback example

function getData(num){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve(num);
        }, 100);
    })
}

var x;

getData(10)
.then(function(num1){
    x = 1+num1; //11
    return getData(30);
})
.then(function(num2){
    var y = 1+num2; //31
    return getData("Meaning of life, universe and everything: "+(x+y)); //42
})
.then(function(ans){
    console.log(ans);
})
