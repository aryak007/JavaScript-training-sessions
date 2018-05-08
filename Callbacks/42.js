function calculateMeaningOfLife(num,callback){
    setTimeout(function() {
        callback(num);
    }, 100);
}


calculateMeaningOfLife(10,function(n1){
    var x = 1 + n1;
    calculateMeaningOfLife(30,function(n2){
        var y = 1+n2;
        calculateMeaningOfLife(
            "Answer to life universe and everything - "+(x+y),
            function(answer){
                console.log(answer);
            }
        )
    })
});