let x = function(){
    console.log("Called from inside a function")
}

let y = function(callback){
    console.log("function y");
    callback();
}

y(x);
