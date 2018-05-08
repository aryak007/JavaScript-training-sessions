

var greatActors = ["Jack Nicholson","Christian Bale",
 "Leonardo Dicaprio","Dustin Hoffman","Dwayne Johnson"]


function addGreatActors(greatActor,callback){
    setTimeout(function(){
        greatActors.push(greatActor);
        callback();
    },2000)
}


function fetchAllGreatActors(){
    
    setTimeout(function(){
        console.log("Printing out the legends - ")
        console.log(greatActors);
    },1000)
}

addGreatActors("Tiger Shroff",fetchAllGreatActors);

