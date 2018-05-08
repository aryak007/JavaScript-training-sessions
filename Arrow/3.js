var foo = function(){
    this.val = 1;
    setTimeout(function(){
        this.val++;
        console.log(this.val);
    }.bind(this),1);
};

var newFoo = new foo();