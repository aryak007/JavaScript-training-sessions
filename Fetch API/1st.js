
const url = "https://randomuser.me/api/?results=12"
fetch(url)
.then(function(response){
    console.log(response)
    if(response.status!=200){
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
    }
    return response.json();
},function(error){
    console.log(error)
})
.then(function(data) {
    //console.log(data)
    for(let result of data.results){
         console.log(result.name.first+" "+result.name.last);
         console.log(result.location.city)
         console.log(result.location.state)
        // console.log(result.gender);
    }
})
 .catch(function(error) {
    console.log("Caught");
});   