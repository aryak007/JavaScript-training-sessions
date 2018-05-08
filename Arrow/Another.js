var foo = function(){
    this.val = 1;
    setTimeout(function(){
        this.val++;
        console.log(this.val);
    },1);
};

var newFoo = new foo();


//Solution 1
var foo = function(){
    this.val = 1;
    var that = this;
    setTimeout(function(){
        that.val++;
        console.log(that.val);
    },1);
};

var newFoo = new foo();

//Solution 2 - Using Arrow functions
var foo = function() {
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    },1);
};

var newFoo = new foo();
