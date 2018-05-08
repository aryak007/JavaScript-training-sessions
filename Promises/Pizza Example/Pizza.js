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


prepareBread()
.then(function(order1){
    console.log(order1);
    return addVegToppings();
},function(){
    console.log("Rejected")
})
.then(function(order2){
    console.log(order2);
    return addNonVegToppings();
})
.then(function(finalOrder){
    console.log(finalOrder);
    console.log("All done. Pizza is ready!!!")
})


// Only order Non-veg

prepareBread()
.then(function(order1){
    console.log(order1);
    return addNonVegToppings();
})
.then(function(finalOrder){
    console.log(finalOrder);
    console.log("All done. Pizza is ready!!!")
})

// Only order veg
prepareBread()
.then(function(order1){
    console.log(order1);
    return addVegToppings();
})
.then(function(finalOrder){
    console.log(finalOrder);
    console.log("All done. Pizza is ready!!!")
})