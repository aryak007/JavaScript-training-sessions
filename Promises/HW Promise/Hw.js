let doHomeWork = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve("Home Work done!!!");
        }, 100);
    });
}

let cleanRoom = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve("Room clean!!!");
        }, 200);
    });
}

let winIcecream = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve("Yay!!!!Won Icecream");
        }, 300);
    });
}

doHomeWork()
.then(function(result1){
    console.log(result1);
    return cleanRoom();
})
.then(function(result2){
    console.log(result2);
    return winIcecream();
})
.then(function(result3){
    console.log(result3);
    console.log("All done. Dad is happy!!!")
})
