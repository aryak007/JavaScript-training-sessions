
var greatActors = ["Jack Nicholson","Christian Bale", "Leonardo Dicaprio",
"Dustin Hoffman","Dwayne Johnson"]


// Transform this function to a function which accepts a callback

function addGreatActors(greatActor){
    setTimeout(function(){
        greatActors.push(greatActor);
    },2000)
}


function fetchAllGreatActors(){
    
    setTimeout(function(){
        console.log("Printing out the legends - ")
        console.log(greatActors);
    },1000)
}

addGreatActors("Tiger Shroff");
fetchAllGreatActors();
