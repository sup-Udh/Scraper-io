import { waitForDebugger } from "inspector";

const puppeteer = require('puppeteer');
export  async function scrapeFunction2(searchTerm : string) {
    if(searchTerm === 'youtube'){


        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ['--start-maximized'],
        });

        const page = await browser.newPage();
        const url = `https://www.youtube.com/watch?v=klmBTGQUkbM`;
        
        await page.goto(url);
        // wait for the page to load
        await page.waitForTimeout(2000);
        
        await page.evaluate(() => document.querySelector('#comments')!.scrollIntoView());

        // const comments = await page.evaluate(() => {
        //     const comments = Array.from(document.querySelectorAll('#comments #content-text')).map(comment => comment.textContent);
        //     return comments;
        // }
        // );
        // console.log(comments);
    

 } 
}