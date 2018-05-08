

function spy(enemySoldiers){
    setTimeout(function(){
        if(enemySoldiers>30000)
            console.log("Hold it!!! Don't attack now");
        else
            console.log("Best time to attack!! Attack now!!");
    },2000)
}

function KingShouldAttackOrNot(enemySoldiers,callback){
    callback(enemySoldiers);
}

KingShouldAttackOrNot(30001,spy);
KingShouldAttackOrNot(24000,spy);
