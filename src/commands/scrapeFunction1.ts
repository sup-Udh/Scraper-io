let puppetter = require('puppeteer');


export function scrapeFunction1(searchTerm : string){
    // check the url if the url is amazon.com then console.log the url
    // if the url is not amazon.com then console.log the url
    var stringified = JSON.stringify(searchTerm);
    var textified = stringified.toString();
    async function test(){
        const browser = await puppetter.launch({
            headless: false,
            defaultViewport: null,
            args: ['--start-maximized'],
        });
        const page = await browser.newPage();
        await page.goto('https://www.amazon.com/');
        await page.screenshot({path: 'example.png'});
        await browser.close();
    }
    if(textified.includes("amazon")){
        // wait till this is done
        test();

    }else{
        console.log("not amazon.com");
    }

    
}

//  sample URL: https://www.amazon.com/s?k=iphone&ref=nb_sb_noss_2