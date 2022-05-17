import { title } from "process";

declare var require: any

let puppetter = require('puppeteer');


export function scrapeFunction1(searchTerm : string, SearthQuery : string) { // searchTetrm => Site , Search => Query
    // check the url if the url is amazon.com then console.log the url
    // if the url is not amazon.com then console.log the url
    var stringified = JSON.stringify(searchTerm);
    var textified = stringified.toString();

    if (typeof window !== 'undefined') {
        console.log('You are on the browser')
      } else {
        console.log('You are on the server')
      }

    async function amazonFunction(){
  
      
        if(!SearthQuery){
            console.log('user did not enter a search query exiting...');
        }else{
            const browser = await puppetter.launch({
                headless: false,
                defaultViewport: null,
                args: ['--start-maximized'],
            });

            const page = await browser.newPage();
            await page.goto(`https://www.${searchTerm}.com/`);
            // search in the search box with the search Query 
            await page.waitFor(2000)
            await page.type('#twotabsearchtextbox', SearthQuery , {delay: 100});
            // wait till the search query is entered
            await page.waitFor(2000);
            await page.click('#nav-search-submit-button');
            await page.waitFor(2000);

        const pages = await page.evaluate(() => {
            const pages = document.querySelectorAll('.a-pagination .a-selected');
            return pages.length ? pages[0].textContent : 1;

        });
        // get the number of pages limit to 5 pages then get the product name and price of each product
        for (let i = 1; i <= pages; i++) {
            await page.goto(`https://www.${searchTerm}.com/s?k=${SearthQuery}&page=${i}`);
            await page.waitFor(2000);
            const productName = await page.evaluate(() => {
                const productName = document.querySelectorAll('.a-color-base.a-text-normal');
                return Array.from(productName).map(product => product.textContent);
            });
            const productPrice = await page.evaluate(() => {
                const productPrice = document.querySelectorAll('.a-price-whole');
                return Array.from(productPrice).map(product => product.textContent);
            });
            console.log(productName);
            console.log(productPrice);

        }
    }
}


    if(textified.includes("amazon")){       
        amazonFunction();

    }else{
        console.log("not amazon.com");
    }

    
}

//  sample URL: https://www.amazon.com/s?k=iphone&ref=nb_sb_noss_2