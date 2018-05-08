//Compare it with the invitation.js example of the callback example

function getInvitation(invite){
        return new Promise(function(resolve,reject){
            if(invite==undefined)
                reject("An error occured");
            resolve(invite);
            
    })
}


var ans1;
//getInvitation("Open Invitation for all:")
getInvitation()
.then(function(text1){
    ans1 = text1+" Amit";
    return getInvitation(ans1);
})
.then(function(text2){
    ans1 = text2+" weds Suman";
    return getInvitation(ans1);
})
.then(function(text3){
    ans1 = text3+" at Krishna Bhavan on 30th April.";
    return getInvitation(ans1);
})
