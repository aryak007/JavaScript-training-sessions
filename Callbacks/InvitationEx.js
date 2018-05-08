function getInvitation(invite,callbackFunction){
        callbackFunction(invite);
}



getInvitation("Open Invitation for all:",function(text1){
    var ans1 = text1+" Amit";
    getInvitation(" Weds",function(text2){
        var ans2 = ans1+text2+" Suman";
        getInvitation(ans2+" at Krishna Bhavan on 30th April. No need to bring gifts as well.",
            function(answer){
                console.log(answer);
            }
        )
    })
});

