function foo(a,b) {

	console.log( "x = "+this.x+"a:" + window.a + ", b:" + this.b );
}
var x = 5;
// spreading out array as parameters
foo.apply( null, [2, 3] );                      // a:2, b:3

var bar = foo.bind( null, 2 );
bar(3);                                         // a:2, b:3