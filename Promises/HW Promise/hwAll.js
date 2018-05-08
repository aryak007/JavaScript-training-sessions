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


Promise.all([doHomeWork(),cleanRoom(),winIcecream()]).then(function(result){
    console.log(result);
    console.log("All jobs done!!!")
});
