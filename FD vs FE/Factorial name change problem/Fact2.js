var factorial = function fact(num){
    factorial = 200;
    if(num==1)
        return 1;
    return num *fact(num - 1);
}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(10));