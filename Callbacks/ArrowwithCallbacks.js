let obj = {
  myVar: 'foo',
  
  myFunc: function() { 
    console.log(this.myVar)   
 
    setTimeout(function() {
      console.log(this.myVar)
    }, 500)
  }
}
obj.myFunc() 