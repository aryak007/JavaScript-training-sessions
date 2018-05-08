function factorial(num){
    factorial.name = 200;
    if(num==1)
        return 1;
    return num *factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(10));