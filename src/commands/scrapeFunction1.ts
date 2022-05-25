declare var require: any

import puppeteer from 'puppeteer';

declare module 'puppeteer' {
  export interface Page {
    waitForTimeout(duration: number): Promise<void>;
  }
}
export function scrapeFunction1(searchTerm : string, SearthQuery : string) { // searchTetrm => Site , Search => Query
    // check the url if the url is amazon.com then console.log the url
    // if the url is not amazon.com then console.log the url
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
           
            

                // var loading = (function() {
                //     var h = ['|', '/', '-', '\\'];
                //     var i = 0;
                  
                //     return setInterval(() => {
                //       i = (i > 3) ? 0 : i;
                //       console.clear();
                //       console.log(h[i]);
                //       i++;
                //     }, 300);
                //   })();
                //     setTimeout(() => {
                //         clearInterval(loading);
                //         console.clear();
                //         // 50 seconds is the time limit for the search
                //     }, 1000); ;
     
                

            

        const pages = await page.evaluate(() => {
            const pages = document.querySelectorAll('.a-pagination .a-selected');
            return pages.length ? pages[0].textContent : 1;

        });
        // get the number of pages limit to 5 pages then get the product name and price of each product

        // display loding for 1 minute
            

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
            // till the process is done console.log saying we're getting with animation         
            // get each product name and price and put them into json keys
            console.log(productName );
            // var jsonArray = [];
            // // for each
            // for (let i = 0; i < productname.length; i++) {
            //     let json = {
            //         productname: productname[i],
            //         productprice: productprice[i]
            //     }
            //     // push the json into the array
            //     jsonArray.push(json);
            // }
            // console.log(jsonArray);

        }
    
}
    }

    if(textified.includes("amazon")){       
        amazonFunction();

    }else{
        
    }

    
}



//  sample URL: 