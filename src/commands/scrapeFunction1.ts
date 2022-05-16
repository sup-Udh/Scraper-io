let puppetter = require('puppeteer');


export function scrapeFunction1(searchTerm : string, SearthQuery : string) { // searchTetrm => Site , Search => Query
    // check the url if the url is amazon.com then console.log the url
    // if the url is not amazon.com then console.log the url
    var stringified = JSON.stringify(searchTerm);
    var textified = stringified.toString();


    async function amazonFunction(){
        const browser = await puppetter.launch({
            headless: false,
            defaultViewport: null,
            args: ['--start-maximized'],
        });
        const page = await browser.newPage();
        await page.goto(`https://www.${searchTerm}.com/`);
        
        await browser.close();
    }


    if(textified.includes("amazon")){       
        amazonFunction();

    }else{
        console.log("not amazon.com");
    }

    
}

//  sample URL: https://www.amazon.com/s?k=iphone&ref=nb_sb_noss_2