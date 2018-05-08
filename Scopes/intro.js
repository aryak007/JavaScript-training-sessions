function outer(){
    var x = 5;
    function inner(){
        var z = 15;
        console.log(x+y+z);
    }
    inner();
    var y = 10;
}
outer();
