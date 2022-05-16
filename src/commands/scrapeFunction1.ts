export function scrapeFunction1(searchTerm : string){
    // check the url if the url is amazon.com then console.log the url
    // if the url is not amazon.com then console.log the url
    var stringified = JSON.stringify(searchTerm);
    var textified = stringified.toString();
    if(textified.includes("amazon")){
        console.log("yes amazon.com");
    }else{
        console.log("not amazon.com");
    }

    
}