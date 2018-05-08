let prepareBread = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve("Pizza bread prepared!!!");
        }, 100);
    });
}

let addVegToppings = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve("Veg Toppings added - Jalapeno,Golden Corn,Black Olive");
        }, 200);
    });
}

let addNonVegToppings = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve("Non-veg Toppings added - Chicken sausages, Grilled chicken");
        }, 300);
    });
}
Promise.all([prepareBread(),addVegToppings(),addNonVegToppings()]).then(function(result){
    console.log(result);
    console.log("All done. Pizza is ready!!!!!!")
});
