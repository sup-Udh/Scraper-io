export function scrapeFunction1(searchTerm : string){
    if(searchTerm === ""){
        console.log("Please enter a search term");
    }else{
        JSON.stringify(searchTerm);
        console.log("Scraping " + searchTerm);
    }
    
}