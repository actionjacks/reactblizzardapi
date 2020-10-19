function fetchOneSpecificCardandShowOneHealth(){
    fetch('https://omgvamp-hearthstone-v1.p.mashape.com/cards/zwick',
    {headers: new Headers({
        'Accept':'application/json',
        "X-Mashape-Key": "anAPIkey"

    })}
)
    .then(function(response){
    console.log("test");
        console.log(response);
        if(response.ok){
            console.log("test3");
            return response.json();
        }
    })
    .then(function(data){
        console.log("test2");
        console.log(data[0].health);
    })
    .catch(errorHandling);
}
