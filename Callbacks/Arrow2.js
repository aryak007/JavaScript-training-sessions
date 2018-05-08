let obj = {
  myVar: 'foo',
  
  myFunc: function() { 
    let self = this
    console.log(this.myVar)  
  
    setTimeout(function() {
      console.log(self.myVar)
    }, 500)
  }
}
obj.myFunc()