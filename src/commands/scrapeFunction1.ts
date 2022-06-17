declare var require: any

import puppeteer from 'puppeteer';
import { scrapeFunction2 } from "./scraperFunction2"


export function scrapeFunction1(searchTerm : string, SearthQuery : string) { // searchTetrm => Site , Search => Query

    var stringified = JSON.stringify(searchTerm);
    var textified = stringified.toString();

    if (typeof window !== 'undefined') {
        console.log('You are on the browser')
      } else {
        console.log('Disconnected from browser')
      }

    async function amazonFunction(){
  
      
        if(!SearthQuery){
            console.log('user did not enter a search query exiting...');
        }else{
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null,
                args: ['--start-maximized'],
            });

            const page = await browser.newPage();
            const url = `https://www.${searchTerm}.com`;
            
            await page.goto(url);
            // search in the search box with the search Query 
            await page.waitForTimeout(2000)
            await page.type('#twotabsearchtextbox', SearthQuery , {delay: 100});
            // wait till the search query is entered
            await page.waitForTimeout(2000);
            await page.click('#nav-search-submit-button');
            await page.waitForTimeout(2000);
        

        const pages = await page.evaluate(() => {
            const pages = document.querySelectorAll('.a-pagination .a-selected');
            return pages.length ? pages[0].textContent : 1;

        });


        for (let i = 1; i <= pages!; i++) {
            await page.goto(`https://www.${searchTerm}.com/s?k=${SearthQuery}&page=${i}`);
            await page.waitForTimeout(2000);
            const productName = await page.evaluate(() => {
                const productName = document.querySelectorAll('.a-color-base.a-text-normal');
                return Array.from(productName).map(product => product.textContent);
            });let productPrice = await page.evaluate(() => {
                const productPrice = document.querySelectorAll('.a-price-whole');
                return Array.from(productPrice).map(product => product.textContent);
                
            });
        
            var EndResult = {
                productName: productName,
                productPrice: productPrice

            }
            console.log(EndResult);
        }
    
}
    }

    if(textified.includes("amazon")){       
        amazonFunction();

    }else{
        console.log("Moving to Next Scraper File")
        scrapeFunction2(searchTerm, SearthQuery);
        
    }

    
}



//  sample URL: 