var outer = (function(){
    var obj = {
        a:"Property a"
    }
    return {
        result:obj
    }
})();
console.log(outer.result.a);