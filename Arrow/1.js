var foo = function(){
    this.val = 1;
    setTimeout(function(){
        this.val++;
        console.log(this.val);
    },1);
};

var newFoo = new foo();