var foo = function(){
    this.val = 1;
    var that = this;
    setTimeout(function(){
        that.val++;
        console.log(that.val);
    },1);
};

var newFoo = new foo();