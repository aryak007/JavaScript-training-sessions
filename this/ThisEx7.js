function foo() {
	// setTimeout(() => {
	// 	console.log(this.a);
	// },100);
	setTimeout(function(){
		console.log(this.a);
	}.bind(this),100)
}
var obj = {
	a: 2
};
foo.call(obj);  